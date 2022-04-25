import { SET_POST_IMG, SET_USER, TOGGLE_POST_MODAL } from "./actionTypes";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
export const togglePostModal = (payload) => ({
  type: TOGGLE_POST_MODAL,
  payload: payload,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setImage = (imgURL) => ({
  type: SET_POST_IMG,
  payload: imgURL,
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
    const storageRef = ref(storage, "images/");

    const uploadTask = uploadBytesResumable(storageRef, payload);

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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          dispatch(setImage(downloadURL));
        });
      }
    );
  };
};
