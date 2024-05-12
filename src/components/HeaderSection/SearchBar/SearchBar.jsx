import React from "react";

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="bg-neutral-50 outline-none border border-neutral-200 w-full rounded text-sm lg:text-[12pt] py-2 px-4 
           max-w-[180px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg
           dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder:text-neutral-500"
    />
  );
}
