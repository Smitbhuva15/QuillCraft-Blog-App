import connect from '@/utills/db'  
import { NextResponse } from 'next/server';
import User from '@/model/UserSchema';
import  bcrypt from 'bcrypt'



export const POST = async (request) => {
  const { username, email, password } = await request.json();
  


  await connect();
  
  
  const hashedPassword = await bcrypt.hash(password, 5);
  console.log(hashedPassword)

  try {
   const user= await User.create({
    username,
    email,
    password: hashedPassword,
   })
  console.log(user)
    return new NextResponse({message:"User has been created"}, {
      status: 201,
    });

  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
