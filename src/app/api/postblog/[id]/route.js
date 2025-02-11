import { NextResponse } from 'next/server';
import connect from "@/utills/db";
import Post from '@/model/PostSchems';

export const GET = async ({params}) => {
    const {id}=params;
  try {
  
    await connect();
    const posts = await Post.findById(id);
   
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
   
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
