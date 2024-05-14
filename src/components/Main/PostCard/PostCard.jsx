import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function PostCard({ post }) {
  return (
    <div className="bg-white dark:bg-black my-7 border dark:border-neutral-800 rounded-md">
      <div className="flex items-center p-5 border-b border-neutral-100 dark:border-neutral-900">
        <img
          src={post.profileImage}
          alt={post.username}
          className="rounded-full h-12 object-cover border dark:border-neutral-800 p-1 mr-3"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <HiOutlineDotsVertical className="h-5 cursor-pointer" />
      </div>
      <img
        src={post.image}
        alt={post.caption}
        className="object-cover w-full"
      />

      <p className="flex p-5 truncate">
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </p>
    </div>
  );
}
