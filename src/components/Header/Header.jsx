import Image from "next/image";
import Link from "next/link";
import React from "react";
import DarkMode from "../DarkMode/DarkMode";

export default function Header() {
  return (
    <div className="shadow border-b sticky top-0 bg-white dark:bg-black z-30 p-3  dark:border-neutral-700">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/Instagram-Logo.webp"
            width={96}
            height={96}
            alt="Instagram Logo"
            className="dark:hidden"
          />
          <Image
            src="/logo.png"
            width={96}
            height={96}
            alt="Instagram Logo"
            className="hidden dark:inline-flex"
          />
        </Link>
        <Link href="/" className="lg:hidden">
          <Image src="/logo.webp" width={40} height={40} alt="Instagram Logo" />
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="bg-neutral-50 outline-none border border-neutral-200 w-full rounded text-sm lg:text-[12pt] py-2 px-4 
          max-w-[200px] sm:max-w-[420px] md:max-w-[550px] lg:max-w-[720px] xl:max-w-[820px]
           dark:bg-neutral-900 dark:border-neutral-800"
        />
        <div className="flex items-center gap-4">
          <DarkMode />
          <button className="text-sm lg:text-[12pt] font-semibold text-neutral-800 dark:text-white select-none">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
