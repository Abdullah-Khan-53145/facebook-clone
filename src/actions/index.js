import { SET_USER, TOGGLE_POST_MODAL } from "./actionTypes";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
export const togglePostModal = (payload) => ({
  type: TOGGLE_POST_MODAL,
  payload: payload,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
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
