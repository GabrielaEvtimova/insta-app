import { app } from "@/firebase.config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

export const db = getFirestore(app);

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

/**
 * Fetches data from the "posts" collection in Firestore, ordered by creation timestamp in descending order.
 *
 * @returns {Promise<Array>} A Promise that resolves with an array of post data objects.
 */
export const getData = async () => {
  const q = query(collection(db, "posts"), orderBy("createdOn", "desc"));
  const querySnapshot = await getDocs(q);

  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

/**
 * Listens for changes to the "likes" subcollection of a specific post and updates the likes state accordingly.
 *
 * @param {string} id - The ID of the post to listen for likes changes.
 * @param {Function} setLikes - Function to set the likes state with the updated likes documents.
 */
export const getLikes = (id, setLikes) => {
  onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
    setLikes(snapshot.docs);
  });
};

/**
 * Adds a like to a specific post by the current user.
 *
 * @param {string} id - The ID of the post to add the like to.
 * @param {object} session - The user session object containing user information.
 * @returns {Promise<void>} A Promise that resolves when the like is successfully added.
 */
export const addLike = async (id, session) => {
  await setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
    username: session?.user?.username,
  });
};

/**
 * Removes a like from a specific post by the current user.
 *
 * @param {string} id - The ID of the post to remove the like from.
 * @param {object} session - The user session object containing user information.
 * @returns {Promise<void>} A Promise that resolves when the like is successfully removed.
 */
export const removeLike = async (id, session) => {
  await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
};
