"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import { AuthContext } from '../context/AuthContext'
import useSWR, { mutate } from 'swr'
import toast from 'react-hot-toast'
import Image from "next/image"
import { useEffect } from "react";
import { useRouter } from "next/router";

// A custom hook to check for the token in localStorage



export default function Dashboard() {


  const{userData}=useContext(AuthContext)
  
  const username=userData.username

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`/api/postblog?username=${username}`, fetcher)
   if (error) return <div>failed to load</div>
   if (isLoading) return <div>loading...</div>
   
  

  const handleDelete=async(id)=>{
     try {
     const res= await fetch(`/api/postblog/${id}`,{
        method:'DELETE'
      })

      if(res.ok){
        toast.success("Post deleted successFully!!")
        mutate(`/api/postblog?username=${username}`)
      }
      
     } catch (error) {
      console.log(error);
      
     }
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
    const res=  await fetch("/api/postblog", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: userData.username,
        }),
      });
      console.log(res)
      if(res.ok){
        const {message}=await res.json()
        toast.success(message)
      }
      else{
        const {message}=await res.json()
        toast.error(message)
      }
      mutate(`/api/postblog?username=${username}`);
      e.target.reset()
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className={styles.container}>
       <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img ||"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} required/>
          <input type="text" placeholder="Desc" className={styles.input}  required/>
          <input type="text" placeholder="Image" className={styles.input} required/>
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
    </div>
  )
}
