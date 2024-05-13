import { app } from "@/firebase.config";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const storage = getStorage(app);

/**
 * Uploads a file to a storage location asynchronously.
 *
 * @param {File} selectedFile - The file to be uploaded.
 * @param {Function} setImageUploading - Function to set the upload state (true/false).
 * @param {Function} setImageUrl - Function to set the URL of the uploaded image.
 * @param {Function} setSelectedFile - Function to reset the selected file after upload.
 * @returns {Promise<void>} A Promise that resolves when the upload is complete.
 */
export const uploadFile = async (
  selectedFile,
  setImageUploading,
  setImageUrl,
  setSelectedFile
) => {
  // Generate a unique file name for the uploaded file
  const fileName = `${new Date().getTime()}-${selectedFile.name}`;

  // A reference to the storage location where the file will be stored
  const storageRef = ref(storage, `posts/${fileName}`);

  // Upload the file to the specified storage reference
  const uploadTask = uploadBytesResumable(storageRef, selectedFile);

  // Attach event listeners to monitor upload progress, handle errors, and process completion
  uploadTask.on(
    "state_changed", // Event type: state change
    // Progress handler
    (snapshot) => {
      // Calculate upload progress as a percentage
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    },
    // Error handler
    (error) => {
      // Log the error, reset upload state and URL, and reset selected file
      console.error(error);
      setImageUploading(false);
      setImageUrl(null);
      setSelectedFile(null);
    },
    // Completion handler
    () => {
      // Get the download URL of the uploaded file
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
        // Set the image URL with the download URL and reset upload state
        setImageUrl(downloadUrl);
        setImageUploading(false);
      });
    }
  );
};
