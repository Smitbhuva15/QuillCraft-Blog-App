import { NextResponse } from 'next/server';
import connect from "@/utills/db";
import Post from '@/model/PostSchems';

export const GET = async () => {
  try {
  
    await connect();
    const posts = await Post.find();
   
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
   
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
