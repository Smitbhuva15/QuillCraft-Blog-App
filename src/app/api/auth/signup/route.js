import connect from '@/utills/db'
import { NextResponse } from 'next/server';
import User from '@/model/UserSchema';
import bcrypt from 'bcrypt'

export const POST = async (request) => {
  const { username, email, password } = await request.json();

  await connect();
  const isexist = await User.findOne({ email: email });

  if (isexist) {
    return new NextResponse(
      JSON.stringify({ message: "Email is already taken" }),
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return new NextResponse(
      JSON.stringify({ message: "User has been created" }),
      { status: 201 }
    );

  } catch (err) {
    console.error("Error creating user:", err.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
