import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage } from "../services/firebase";
import { db } from "../services/firebase";
import { toast } from "react-toastify";
import { useLoading } from "../context/LoaderContext";

const useSignUp = () => {
  const { setLoading } = useLoading();
  const SignupUser = async (email, password, image) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, res.user.uid);
      const uploadTask = uploadBytes(storageRef, image);

      uploadTask
        .then(async (snapshot) => {
          return getDownloadURL(snapshot.ref);
        })
        .then(async (downloadURL) => {
          await updateProfile(res.user, {
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            email: email,
            photoURL: downloadURL,
          });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return { SignupUser };
};

export default useSignUp;
