"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const supabase = createClientComponentClient();

export default function Button() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("hasLoggedIn");
    router.push("/auth/v1/login");
    toast.success("SignOut Successfully");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <button onClick={handleSignOut} className="text-3xl font-bold text-red-800 active:text-teal-600">SignOut</button>
      </div>
    </div>
  );
}
