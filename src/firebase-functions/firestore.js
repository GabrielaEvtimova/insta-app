import { app } from "@/firebase.config";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

const db = getFirestore(app);

export const uploadPost = async (
  session,
  caption,
  imageUrl,
  setPostUploading,
  setOnUpload
) => {
  setPostUploading(true);
  const docRef = await addDoc(collection(db, "posts"), {
    username: session.user.username,
    profileImage: session.user.image,
    caption: caption,
    image: imageUrl,
    createdOn: serverTimestamp(),
  });
  setPostUploading(false);
  setOnUpload(false);
};
