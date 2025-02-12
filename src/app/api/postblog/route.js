import { NextResponse } from 'next/server';
import connect from "@/utills/db";
import Post from '@/model/PostSchems';

export const GET = async (request) => {
  try {
  
    await connect();
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    console.log( username,"...........")
  
    const posts = await Post.find({username:username});
   
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
   
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};


export const POST = async (request) => {
  
  const body = await request.json();
  const newPost = new Post(body);
 
   try {
     await connect();
 
     await newPost.save();
 
     return new NextResponse(JSON.stringify(
      {message:"Post has been created"}, { status: 201 }
     ));
   } catch (err) {
     return new NextResponse(JSON.stringify(
      {message:"Database Error"}, { status:  500 }
     ));
   }
 };
 