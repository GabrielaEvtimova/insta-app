import CommentSection from "@/components/Main/CommentSection/CommentSection";
import Like from "@/components/Main/LikeSection/LikeSection";
import { getSinglePost } from "@/firebase-functions/firestore";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default async function page({ params }) {
  const id = params.id;
  const post = await getSinglePost(id);

  return (
    <main className="mx-auto max-w-3xl">
      <div className="bg-white dark:bg-black my-7 border dark:border-neutral-700 rounded-md">
        <div className="flex items-center p-5 border-b border-neutral-100 dark:border-neutral-800">
          <img
            src={post.profileImage}
            alt={post.username}
            className="rounded-full h-12 object-cover border dark:border-neutral-700 p-1 mr-3"
          />
          <p className="flex-1 font-bold">{post.username}</p>
          <HiOutlineDotsVertical className="h-5 cursor-pointer" />
        </div>
        <img
          src={post.image}
          alt={post.caption}
          className="object-cover w-full"
        />
        <Like id={id} />
        <p className="flex p-5 truncate">
          <span className="font-bold mr-2">{post.username}</span>
          <span className=" truncate">{post.caption}</span>
        </p>
        <CommentSection id={id} />
      </div>
    </main>
  );
}
