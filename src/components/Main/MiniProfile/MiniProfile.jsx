"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session ? session?.user?.image : "/logo.webp"}
        alt={session ? session?.user?.name : "instagram-logo"}
        className="w-16 h-16 rounded-full border p-[2px] border-neutral-300 dark:border-neutral-600"
      />
      <div className="flex-1 ml-4">
        {session && <h2 className="font-bold">{session?.user?.username}</h2>}
        <h3 className="text-neutral-400 dark:text-neutral-500 text-sm">
          Welcome to Insta App
        </h3>
      </div>
      {session ? (
        <button
          className="text-violet-700 dark:text-violet-500 font-semibold text-sm"
          onClick={signOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="text-violet-700 dark:text-violet-500 font-semibold text-sm"
          onClick={signIn}
        >
          Sign In
        </button>
      )}
    </div>
  );
}
