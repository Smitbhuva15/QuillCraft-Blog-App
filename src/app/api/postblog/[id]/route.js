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


export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

