import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link href="/" className="hidden lg:inline-flex">
        <Image
          src="/insta-black.png"
          width={96}
          height={96}
          alt="Instagram Logo"
          className="dark:hidden w-auto"
        />
        <Image
          src="/insta-white.png"
          width={96}
          height={96}
          alt="Instagram Logo"
          className="hidden dark:inline-flex w-auto"
        />
      </Link>
        <Link href="/" className="lg:hidden  ">
         <Image
          src="/InstaApp.png"
          width={40}
          height={40}
          alt="Instagram Logo"
          priority
        />
      </Link>
    </>
  );
}
