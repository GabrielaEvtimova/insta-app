"use client";

import { addLike, getLikes, removeLike } from "@/firebase-functions/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

export default function Like({ id }) {
  const { data: session } = useSession();
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    getLikes(id, setLikes);
  }, [hasLiked]);

  useEffect(() => {
    if (likes.find((like) => like.id === session?.user?.uid)) {
      setHasLiked(true);
    } else {
      setHasLiked(false);
    }
  }, [likes]);

  const handleLikedPost = async () => {
    if (hasLiked) {
      await removeLike(id, session);
    } else {
      await addLike(id, session);
    }
  };

  return (
    <div>
      {session ? (
        <div className="flex border-t border-neutral-100 dark:border-neutral-800 px-4 pt-4">
          <div className="flex items-center gap-2">
            {!hasLiked ? (
              <HiOutlineHeart
                className=" text-3xl cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
                onClick={handleLikedPost}
              />
            ) : (
              <HiHeart
                className="text-[rgb(248,87,165)] text-3xl cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
                onClick={handleLikedPost}
              />
            )}
            {likes.length === 1 && <p className="text-neutral-500">1 like</p>}
            {likes.length > 1 && <p className="text-neutral-500">{likes.length} likes</p>}
          </div>
        </div>
      ) : (
        <div className="flex border-t border-neutral-100 dark:border-neutral-800 px-4 pt-4">
          {likes.length === 1 && <p className="text-neutral-500">1 like</p>}
            {likes.length > 1 && <p className="text-neutral-500">{likes.length} likes</p>}
        </div>
      )}
    </div>
  );
}
