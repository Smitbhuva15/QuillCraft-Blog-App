
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/Components/button/Button";
import Hero from '@/assest/hero2.png'



export default function Home() {
  return (
    <div className={styles.container}>
      {/* First Item: Text Section */}
      <div className={styles.item}>
        <h1 className={styles.title}>
        Transform your digital products with stunning design.
        </h1>
        <p className={styles.desc}>
        Bringing Your Vision to Life. We unite the best minds in the global tech industry to make it happen.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>

     
      <div className={styles.item}>
      
        <Image
          src={Hero}
          alt="Illustration of a digital product design process"
          className={styles.img}
       
        />
      </div>
    </div>
  );
}
