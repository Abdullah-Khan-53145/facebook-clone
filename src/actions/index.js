import {
  SET_LOADING,
  SET_POST,
  SET_POST_IMG,
  SET_USER,
  TOGGLE_POST_MODAL,
} from "./actionTypes";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const togglePostModal = (payload) => ({
  type: TOGGLE_POST_MODAL,
  payload: payload,
});

export const setPost = (post) => ({
  type: SET_POST,
  payload: post,
});
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setImage = (imgURL) => ({
  type: SET_POST_IMG,
  payload: imgURL,
});

export const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
});

export const signInAPI = () => {
  return async (dispatch) => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signOutAPI = () => {
  return async (dispatch) => {
    try {
      const result = await signOut(auth);
      localStorage.setItem("user", null);
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const UploadPost = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    const metadata = {
      contentType: "image/jpeg",
    };
    console.log(payload);
    const storageRef = ref(storage, `images/${payload.postImg.name}`);
    const uploadTask = uploadBytesResumable(
      storageRef,
      payload.postImg,
      metadata
    );

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // Add a new document with a generated id.
          const docRef = await addDoc(collection(db, "Posts"), {
            user: payload.user,
            caption: payload.postCaption,
            img: downloadURL,
            key: payload.key,
          });
          console.log("Document written with ID: ", docRef.id);
          dispatch(setLoading(false));
        });
      }
    );
  };
};

export const getPostAPI = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "cities"));
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc);
    });
    dispatch(setPost(posts));
  };
};
