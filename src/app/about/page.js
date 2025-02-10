import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/Components/button/Button'

export default function About() {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt=""
        className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award winning digital experiences
        </h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
        We are a dedicated team of creative professionals with a shared passion for crafting exceptional digital experiences. With expertise in design, development, and strategy, we focus on building innovative products that not only meet the needs of businesses but also create lasting connections with users. Our approach blends creativity with functionality to deliver solutions that are intuitive, impactful, and user-centered.          <br />
          <br />
          At the heart of what we do is collaboration. We work closely with our clients to understand their vision and turn it into reality, always striving to push the boundaries of what’s possible. Our goal is to transform ideas into digital products that stand out, resonate with audiences, and drive success in an ever-evolving digital landscape.
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>
        We specialize in creating powerful digital solutions that help businesses thrive in today’s fast-paced world. From custom web and app development to stunning design and branding, we craft products that are intuitive, scalable, and user-focused. Our team works closely with clients to bring their visions to life, ensuring that each project is tailored to meet their unique needs and objectives.
          <br />
          <br /> - Dynamic Websites
          <br />
          <br /> - Fast and Handy
          <br />
          <br /> - Mobile Apps
        </p>
        <Button url="/contact" text="Contact" />
      </div>
    </div>
  </div>
  )
}
