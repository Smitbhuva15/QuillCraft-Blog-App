import connect from '@/utills/db'
import { NextResponse } from 'next/server';
import User from '@/model/UserSchema';
import bcrypt from 'bcrypt'



export const POST = async (request) => {
    const { email, password } = await request.json();

    await connect();

    try {
        const isexist = await User.findOne({ email: email });
        if (!isexist) {
            return new NextResponse({ message: "user is not exist with this email" }, { status: 401 })
        }
 console.log(isexist)
        const match = await bcrypt.compare(password,isexist.password);
        console.log(match)
        if (!match) {
            return new NextResponse({ message: "email or password not vaild!!" }, { status: 400 })
        }
   

        return new NextResponse({ message: "User loged In successFully!!" },
            {user:isexist }  ,
            { status: 200 }
        );

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
