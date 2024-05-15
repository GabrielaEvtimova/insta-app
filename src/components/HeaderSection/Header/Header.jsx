"use client";
import React, { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import DarkMode from "../DarkMode/DarkMode";
import ModalUpload from "../ModalUpload/ModalUpload";
import { HiPlusCircle } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const { data: session } = useSession();

  const [onUpload, setOnUpload] = useState(false);
  const [onClickProfile, setOnClickProfile] = useState(false);

  return (
    <div className="shadow border-b sticky top-0 bg-white dark:bg-black z-30 p-3  dark:border-neutral-700">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Logo />
        {/* <SearchBar /> */}
        <div className="flex items-center gap-3 sm:gap-4">
          <DarkMode />
          {session ? (
            <>
              <HiPlusCircle
                className="text-3xl sm:text-4xl cursor-pointer transform hover:scale-125 transition duration-300"
                onClick={() => setOnUpload(true)}
              />

              <img
                src={session.user.image}
                alt={session.user.name}
                className="rounded-full sm:w-10 sm:h-10 w-8 h-8 cursor-pointer transform hover:scale-110 transition duration-300"
                onClick={() => {setOnClickProfile(!onClickProfile)}}
              />
              {onClickProfile && (
                <div
                  onClick={signOut}
                  className="flex gap-3 items-center absolute text-sm font-semibold w-2xl ml-3 sm:ml-10 top-16 px-3 py-[4px] cursor-pointer hover:scale-110 transition duration-300"
                >
                  <FaSignOutAlt />
                  <p className="">Sign out</p>
                </div>
              )}
            </>
          ) : (
            <button
              className="text-sm lg:text-[12pt] font-semibold text-neutral-800 dark:text-white select-none"
              onClick={signIn}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
      <ModalUpload
        onUpload={onUpload}
        setOnUpload={setOnUpload}
        session={session}
      />
    </div>
  );
}
