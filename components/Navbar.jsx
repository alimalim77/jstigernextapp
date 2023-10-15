"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { session, status } = useSession();
  console.log(session);
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        GTCoding
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        Add Topic
      </Link>
      {session === "authenticated" ? (
        <button className="bg-slate-900 text-white px-6 py-2 rounded-md">
          Sign Out
        </button>
      ) : (
        <button className="bg-slate-900 text-white px-6 py-2 rounded-md">
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
