import React from "react";
import Posts from "../Posts/Posts";
import MiniProfile from "../MiniProfile/MiniProfile";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      {/* Posts - left side */}
      <section className="md:col-span-2">
        <Posts />
      </section>

      {/* MiniProfile - right side */}
      <section className="hidden md:inline-grid md:col-span-1">
        <MiniProfile />
      </section>
    </main>
  );
}
