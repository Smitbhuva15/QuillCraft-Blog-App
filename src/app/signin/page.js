import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { redirect} from "next/navigation";


const createInvoice=async (formData)=>{
  'use server'

  const rawFormData = {
    email: formData.get('Email'),
    password: formData.get('password'),
  }

  const res=await fetch('http://localhost:3000/api/auth/signin',{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(rawFormData)
  })

 
  if(!res.ok){
    throw new Error("user is not exist")
  }

   return redirect('/')
  
  
 
}


export default function Singin() {

    return (
      <div className={styles.container}>
         <h1 className={styles.title}>Sign in</h1>
        <h2 className={styles.subtitle}>Please sign in to see the dashboard</h2>
        <form action={createInvoice} className={styles.form}>
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
      </div>
    )
  
}
