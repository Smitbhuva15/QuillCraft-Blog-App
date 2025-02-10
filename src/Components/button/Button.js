import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

export default function Button({ text, url }) {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  )
}
