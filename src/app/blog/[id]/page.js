import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

// Function to fetch data from your API
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();  // Returns a 404 if data is not found
  }

  return res.json();  // Return the fetched data
}

// Fetch metadata based on the dynamic params
export async function generateMetadata({ params }) {
  // Ensure we resolve the id parameter first
  const post =  getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

// Main BlogPost component that fetches the post by id
const BlogPost = async ({ params }) => {
  // Fetch data using the dynamic id (params.id)
  const data =  getData(params.id);


 console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt={`${data.username}'s avatar`}  // Add alt text for accessibility
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="Blog Image" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
