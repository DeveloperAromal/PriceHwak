"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../../includes/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const hasLoggedIn = localStorage.getItem("hasLoggedIn");
    if (hasLoggedIn) {
      router.push("/dashboard/dash/v0");
    }
  }, [router]);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data?.user) {
      toast.success("Logged in successfully");
      localStorage.setItem("hasLoggedIn", "true");
      router.push("/dashboard/dash/v0");
    } else {
      toast.error("Email or Password does not match");
    }
  };
  return (
    <section>
      <div>
        <div className="w-80 h-100 border box-shad bg-black border-teal-500 rounded-md  flex justify-center">
          <div>
            <div>
              <div className="w-20 h-20 absolute rounded-full bg-cyan-400 blur">
                .
              </div>
              <h1 className="text-center font-bold text-3xl py-10">
                Welcome back!
              </h1>
            </div>
            <div className="pb-2">
              <label htmlFor="email" className="py-1">
                Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="text-black px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div className="pb-2">
              <label htmlFor="password" className="py-1">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                value={password}
                id="password"
                maxLength={8}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="text-black px-3 w-64 xl:w-64 h-10 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div className="flex items-center justify-center py-10">
              <button
                className="py-2 px-24 rounded-xl text-black bg-white font-bold hover:bg-slate-300"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-center">
              <p>
                Don't have an account?{" "}
                <Link href="/auth/v1/signup">
                  <span className="text-blue-500">SignUp</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
