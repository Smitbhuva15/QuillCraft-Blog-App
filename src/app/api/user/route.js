import { NextResponse } from 'next/server';
import connect from '@/utills/db';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    await connect();
    const t1=await request.json()
    const token=t1.token
    
    if (!token) {
        return new NextResponse(
            JSON.stringify({ message: "User cannot be authenticated" }),
            { status: 401 }
        );
    }

    try {
       
        const smalluserdata =await jwt.verify(token, process.env.JWTSECRETE_PASSWORD); console.log(smalluserdata)
        
        return new NextResponse(
            JSON.stringify({
                message: "User data fetched successfully",
                user: smalluserdata,
            }),
            { status: 200 }
        );
    } catch (error) {
       
       
            console.error('Error verifying token:', error.message);
            return new NextResponse(
                JSON.stringify({ message: "Internal Server Error" }),
                { status: 500 }
            );
        
    }
}
