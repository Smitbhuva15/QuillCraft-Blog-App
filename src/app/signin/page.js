"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { redirect} from "next/navigation";
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';
import Cookies from 'js-cookie';





export default function Singin() {

    const { setToken} = useContext(AuthContext)
  
    function setTokenCookies(token) {
      Cookies.set('token', token, { expires: 7, path: '', secure: true, sameSite: 'Strict' });
    }
  
const createInvoice=async (e)=>{
 
  e.preventDefault();
 
  
    const email = e.target[0].value
    const password = e.target[1].value;

    console.log(email,password)
  
  

  const res=await fetch('http://localhost:3000/api/auth/signin',{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify( {
      email,
      password,
    })
  })
  
  
 
  if (res.ok) {
    const { message, user, token } = await res.json();
    
    setTokenCookies(token)
    setToken(token)
    // console.log(message, user, token);
    toast.success(message)
     setTimeout(() => {
      redirect('/')
     }, 2000);
  }
  else{
    const errorMessage = await res.json(); 
    toast.error(errorMessage.message)
  }

}

    return (
      <div className={styles.container}>
         <h1 className={styles.title}>Sign in</h1>
        <h2 className={styles.subtitle}>Please sign in to see the dashboard</h2>
        <form  onSubmit={createInvoice} className={styles.form}>
          <input
            type="text"
            placeholder="Email"
            required
            name='Email'
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name='password'
            className={styles.input}
          />
          <button className={styles.button}>Singin</button>
         {/* {error && "Something went wrong!"} */}
        </form>
        <span className={styles.or}>- OR -</span>
        <Link className={styles.link} href="/signup">
        Create new account
      </Link>
   <Toaster />
      </div>
    )
  
}
