"use client";

import React from "react";
import { RWebShare } from "react-web-share";
import { IoMdShare } from "react-icons/io";


export default function CopyLink({ post }) {

  const baseUrlArr = window.location.href.split("/");
  const baseUrl = baseUrlArr.slice(0, baseUrlArr.indexOf("post")).join("/");

  return (
      <RWebShare
        data={{
          text: ``,
          url: `${baseUrl}/post/${post.id}`,
          title: `Share via`,
        }}
        onClick={() => console.log("shared successfully!")}
        sites={["copy", "facebook", "reddit", "linkedin"]}
        
      >
        <IoMdShare className="h-5 cursor-pointer text-xl dark:text-neutral-300" />
      </RWebShare>
  );
}
