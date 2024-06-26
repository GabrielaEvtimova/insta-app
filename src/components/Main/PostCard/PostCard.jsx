import React from "react";
import Like from "../LikeSection/LikeSection";
import CommentSection from "../CommentSection/CommentSection";
import Link from "next/link";
import CopyLink from "../CopyLink/CopyLink";

export default function PostCard({ post }) {
  const copylink = () => {
    navigator.clipboard.writeText();
  };
  return (
    <div className="bg-white dark:bg-black my-7 border dark:border-neutral-700 rounded-md">
      <div className="flex items-center p-5 border-b border-neutral-100 dark:border-neutral-800">
        <img
          src={post.profileImage}
          alt={post.username}
          className="rounded-full h-12 object-cover border dark:border-neutral-700 p-1 mr-3"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <CopyLink post={post} />
      </div>
      <Link href={`/post/${post.id}`}>
        <img
          src={post.image}
          alt={post.caption}
          className="object-cover w-full"
        />
      </Link>
      <Like id={post.id} />
      <p className="flex p-5 truncate">
        <span className="font-bold mr-2">{post.username}</span>
        <span className=" truncate">{post.caption}</span>
      </p>
      <CommentSection id={post.id} />
    </div>
  );
}
