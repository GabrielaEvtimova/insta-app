import { app } from "@/firebase.config";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const db = getFirestore(app);

/**
 * Uploads a new post to the database asynchronously.
 *
 * @param {object} session - The user session object containing user information.
 * @param {string} caption - The caption for the post.
 * @param {string} imageUrl - The URL of the image to be included in the post.
 * @param {Function} setPostUploading - Function to set the post uploading state (true/false).
 * @param {Function} setOnUpload - Function to set the upload state of the modal (true/false).
 * @returns {Promise<void>} A Promise that resolves when the post is successfully uploaded.
 */
export const uploadPost = async (
  session,
  caption,
  imageUrl,
  setPostUploading,
  setOnUpload
) => {
  // Set the post uploading state to true
  setPostUploading(true);

  // Add a new document to the "posts" collection with post details
  const docRef = await addDoc(collection(db, "posts"), {
    username: session.user.username,
    profileImage: session.user.image,
    caption: caption,
    image: imageUrl,
    createdOn: serverTimestamp(),
  });

  // Set the post uploading and upload modal states to false
  setPostUploading(false);
  setOnUpload(false);
};

export const getData = async () => {
  const q = query(collection(db, "posts"), orderBy("createdOn", "desc"));
  const querySnapshot = await getDocs(q);

  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
