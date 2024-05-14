import React from "react";
import Posts from "../Posts/Posts";
import MiniProfile from "../MiniProfile/MiniProfile";

export default function Feed() {
  return (
    <main
      className="grid grid-cols-1 md:max-w-6xl mx-auto
    md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    >
      {/* Posts - left side */}
      <section className="md:col-span-2 lg:col-span-3 xl:col-span-4">
        <Posts />
      </section>

      {/* MiniProfile - right side */}
      <section
        className="hidden md:inline-grid
      lg:col-span-2 md:col-span-2 xl:col-span-1"
      >
        <div className="fixed w-[380px]">
          <MiniProfile />
        </div>
      </section>
    </main>
  );
}
