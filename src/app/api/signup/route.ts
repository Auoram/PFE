import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import { hash } from "bcryptjs";

export async function GET(req: Request){
    try{
        const body =await req.json();
        const {email, password,role} = body;
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        });
        if(existingUserByEmail){
            return NextResponse.json({user:null, message:"User with this email already exists"},{status: 409})
        }

        const hashedPassword = await hash(password,10)
        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                role
            }
        })
        const {password: newUserPassword, ...rest}=newUser;
        return NextResponse.json({user:newUser,message: "User created successfully"},{status: 201});
    }catch(error){
        return NextResponse.json({message: "Something went wrong"},{status: 500});
    }
}