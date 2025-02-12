import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  console.log(res)

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export default async function Blog() {
  const data=await getData();
  // console.log(data)

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <div className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <p className={styles.desc}>{item.content}</p>

          </div>
        </div>
      ))}
    </div>
  )
}
