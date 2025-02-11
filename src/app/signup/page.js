// "use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { redirect} from "next/navigation";
// import toast, { Toaster } from 'react-hot-toast';


const createInvoice=async (formData)=>{
  'use server'

  const rawFormData = {
    username: formData.get('Username'),
    email: formData.get('Email'),
    password: formData.get('password'),

  }

  const res=await fetch('http://localhost:3000/api/auth/signup',{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(rawFormData)
  })

 
  // const data = await res.json();
  // console.log(data.message)
  

  if(!res.ok){
    console.log("user not")
    throw new Error("user not cretated")
  }

   return redirect('/signin')
  
  
 
}

export default function Signup() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form action={createInvoice} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          name='Username'
          className={styles.input}
        />
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
        <button className={styles.button}>Register</button>
       {/* {error && "Something went wrong!"} */}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="signin">
        Login with an existing account
      </Link>
    </div>
  )
}
