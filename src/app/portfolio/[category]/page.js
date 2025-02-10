import React from 'react'
import {items} from './data.js'
import Image from 'next/image.js';
import Button from '@/Components/button/Button.js';
import {styles} from './page.module.css'
import { notFound } from 'next/navigation.js';


const getdata = (data) => {
  const senddata = items[data];
  if (senddata) {
    return senddata; 
  }
 return notFound()  
}

export default async function Category({ params }) {
  const cat=params.category;
  // const data= await getdata(cat)
  console.log(cat)

  return (
  //   <div >
  //   <h1 >{params.category}</h1>

  //   {data.map((item) => (
  //     <div key={item.id}>
  //       <div >
  //         <h1 >{item.title}</h1>
  //         <p >{item.desc}</p>
  //         <Button text="See More" url="#" />
  //       </div>
  //       <div >
  //         <Image
           
  //           fill={true}
  //           src={item.image}
  //           alt=""
  //         />
  //       </div>
  //     </div>
  //   ))}
  // </div>
   <div></div>
  )
}
