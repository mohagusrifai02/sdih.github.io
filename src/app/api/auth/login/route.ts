import { connectDB } from "../../../../../lib/mongodb";
import { User } from "../../../../../models/User";
import bcrypt from 'bcrypt';
import { singToken } from '../../../../../lib/auth';
import { NextResponse } from "next/server";
import { strict } from "assert";

export async function POST(req:Request){
    await connectDB();
    const {email, password} = await req.json();

    // validasi
    const user = await User.findOne({ email });
    if(!user){
        return Response.json({ error:'user tidak ditemukan'}, {status:404});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return Response.json({ error:'password salah'}, {status:401});
    }

    // inti
    const token = singToken({ id:user._id.toString(), email:user.email});

    
    const response = NextResponse.json({
        message:'Login berhasil',
        user:{
            id:user._id,
            email:user.email
        }
    });

    response.cookies.set('token',token, {
        httpOnly : true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 
    })

    return response;
};