import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.container}>
    <div>Copyrights © 2025 - All rights reserved by QuillCraft - Developed by Smit.Tech</div>
    <div className={styles.social}>
      <Image src="/1.png" width={15} height={15} className={styles.icon} alt="QuillCraft Facebook Account" />
      <Image src="/2.png" width={15} height={15} className={styles.icon} alt="QuillCraft" />
      <Image src="/3.png" width={15} height={15} className={styles.icon} alt="QuillCraft" />
      <Image src="/4.png" width={15} height={15} className={styles.icon} alt="QuillCraft" />
    </div>
  </div>
  )
}
