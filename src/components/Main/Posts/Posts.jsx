import { getData } from "@/firebase-functions/firestore";
import React from "react";
import PostCard from "../PostCard/PostCard";

export default async function Posts() {
  
  const posts = await getData();

  return (
    <div>
      {posts.map((post) => 
        <PostCard key={post.id} post={post} />
      )}
    </div>
  );
}
