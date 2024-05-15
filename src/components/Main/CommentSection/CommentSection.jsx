"use client";

import { addComment, db, getComments } from "@/firebase-functions/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";

export default function CommentSection({ id }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const database = db;

  useEffect(() => {
    getComments(id, setComments);
  }, [database]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addComment(id, session, commentToSend);
  };

  return (
    <div>
      {comments.length > 0 && (
        <div className="mx-10 hover:overflow-y-scroll overflow-y-hidden max-h-24">
          {comments.map((c, id) => (
            <div
              key={id}
              className="flex items-center space-x-2 mb-2 justify-between"
            >
              <img
                src={c.data().profileImage}
                alt={c.data().username}
                className="rounded-full h-7 w-7 object-cover border p-[2px] dark:border-neutral-700"
              />
              <p className="text-sm flex-1">
                <span className="font-bold text-neutral-700 dark:text-neutral-300">
                  {c.data().username}
                </span>{" "}
                <span className="text-neutral-700 dark:text-neutral-300 whitespace-normal">
                  {c.data().comment}
                </span>
              </p>

              <Moment
                fromNow
                className="text-xs truncate text-neutral-400 dark:text-neutral-600 pr-2"
              >
                {c.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {session && (
        <form
          onSubmit={handleSubmit}
          className="flex p-4 gap-2 items-center"
        >
          <img
            src={session?.user?.image}
            alt={session?.user?.name}
            className="rounded-full w-10 h-10 object-cover border dark:border-neutral-700 p-[4px]"
          />
          <input
            type="text"
            placeholder="Add a comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="outline-none flex-1 focus:ring-0 border-none bg-transparent"
          />
          <button
            disabled={!comment}
            type="submit"
            className=" text-violet-700 dark:text-violet-500 disabled:text-violet-300 dark:disabled:text-violet-900 disabled:cursor-not-allowed cursor-pointer"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
