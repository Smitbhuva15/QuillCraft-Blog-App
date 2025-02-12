import connect from '@/utills/db'
import { NextResponse } from 'next/server';
import User from '@/model/UserSchema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const POST = async (request) => {
    const { email, password } = await request.json();
    await connect();
    try {

        const isexist = await User.findOne({ email: email });
        if (!isexist) {
            return new NextResponse(
                JSON.stringify({
                    message: "User does not exist with this email"
                }),
                { status: 401 }
            );
        }


        const match = await bcrypt.compare(password, isexist.password);
        if (!match) {
            return new NextResponse(
                JSON.stringify({
                    message: "Invalid email or password"
                }),
                { status: 400 }
            );
        }

        const usersend = await User.findOne({ email: email }, { password: 0 });
        const token = jwt.sign(
            {
                id: isexist._id,
                email: isexist.email,
                username: isexist.username
            }

            , process.env.JWTSECRETE_PASSWORD
        );

      

        return new NextResponse(
            JSON.stringify({
                message: "User logged in successfully!",
                user: usersend,
                token:token
            }),
            { status: 200 }
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify({ message: err.message }),
            { status: 500 }
        );
    }
};
