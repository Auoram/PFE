import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { compare } from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const passwordMatch = await compare(password, existingUser.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }

    const { password: userPassword, ...userData } = existingUser;

    return NextResponse.json({ user: userData, message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error.message);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
