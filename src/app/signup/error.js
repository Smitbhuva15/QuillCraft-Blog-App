'use client' // Error boundaries must be Client Components
 
import { useEffect, useState } from 'react'
import styles from '../page.module.css'
 
export default function Error({ error, reset }) {


  useEffect(() => {
    
    console.error(error)
    
  }, [error])
 
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>ERROR</h2>
      <button
          className={styles.errorButton}

        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}