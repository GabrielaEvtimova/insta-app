"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiCamera } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import { uploadFile } from "@/storage/storage";

export default function ModalUpload({ onUpload, setOnUpload }) {
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      uploadImageToStorage();
    }
  }, [selectedFile]);

  const addImageToPost = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const uploadImageToStorage = async () => {
    setImageUploading(true);
    await uploadFile(
      selectedFile,
      setImageUploading,
      setImageUrl,
      setSelectedFile
    );
  };

  return (
    <>
      {onUpload && (
        <Modal
          isOpen={onUpload}
          className="max-w-lg w-[90%] p-6 absolute top-56 right-[50%] translate-x-[50%] border-2 rounded-md shadow-md bg-white dark:bg-black outline-none"
          onRequestClose={() => setOnUpload(false)}
          ariaHideApp={false}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={imageUrl}
                alt="selected file"
                className={`w-full max-h-[250px] object-contain cursor-pointer ${
                  imageUploading && "animate-pulse"
                }`}
              />
            ) : (
              <>
                <HiCamera
                  onClick={() => filePickerRef.current.click()}
                  className="text-5xl text-neutral-400 dark:text-neutral-600 cursor-pointer"
                />
                <input
                  hidden
                  ref={filePickerRef}
                  type="file"
                  accept="image/*"
                  onChange={addImageToPost}
                />
              </>
            )}
            <input
              type="text"
              maxLength="150"
              placeholder="Please enter your caption..."
              className="m-4 border-none text-center w-full focus:outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500 dark:bg-black"
            />
            <button
              disabled
              className="w-full m-6 p-2 rounded-lg shadow-md
              bg-violet-300 text-neutral-900
              dark:bg-violet-700 dark:text-neutral-100
              disabled:bg-neutral-100 disabled:text-neutral-600
              dark:disabled:bg-neutral-800 dark:disabled:text-neutral-200
              hover:brightness-95 dark:hover:brightness-125 
              disabled:cursor-not-allowed disabled:hover:brightness-100 dark:disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
          <AiOutlineClose
            className="cursor-pointer absolute top-2 right-2 transform hover:scale-125 transition duration-300"
            onClick={() => setOnUpload(false)}
          />
        </Modal>
      )}
    </>
  );
}
