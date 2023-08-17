"use client";

import styles from "@/template/SignupPage.module.css";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("پسوورد ها یکسان نمیباشند!");
      return;
    }

    setLoading(true);

    const url = "/api/auth/signup";
    const data = JSON.stringify({ email, password });
    const config = { headers: { "Content-Type": "application/json" } }; // fix typo in 'headers'

    try {
      const res = await axios.post(url, data, config);

      if (res.status === 201) {
        router.push("/signin");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "خطایی در سرور رخ داده است!";
      toast.error(errorMessage);
    }
    setLoading(false);
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label htmlFor="email">ایمیل:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">رمزعبور:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="rePassword">تکرار رمزعبور:</label>
        <input
          name="rePassword"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="tail-spin-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit" onClick={(e) => signupHandler(e)}>
            ثبت نام
          </button>
        )}
      </form>
      <div>
        <p>
          حساب کاربری دارید؟
          <Link href="/signin">ورود</Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}

export default SignupPage;
