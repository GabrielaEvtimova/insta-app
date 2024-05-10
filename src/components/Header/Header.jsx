import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="shadow border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/Instagram-Logo.webp"
            width={96}
            height={96}
            alt="Instagram Logo"
          />
        </Link>
        <Link href="/" className="lg:hidden">
          <Image src="/logo.webp" width={40} height={40} alt="Instagram Logo" />
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="bg-neutral-50 border border-neutral-200 w-full rounded text-sm lg:text-[12pt] py-2 px-4 
          max-w-[360px] sm:max-w-[460px] md:max-w-[580px] lg:max-w-[720px] xl:max-w-[820px]"
        />
        <button className="text-sm lg:text-[12pt] font-semibold text-blue-500">
          Sign in
        </button>
      </div>
    </div>
  );
}
