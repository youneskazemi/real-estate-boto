import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "اطلاعات به درستی وارد نشده!" },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری قبلا ایجاد شده!" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "حساب کاربری با موفقیت ایجاد شد!" });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
