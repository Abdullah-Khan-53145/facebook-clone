import { TOGGLE_POST_MODAL } from "./actionTypes";

export const togglePostModal = (payload) => ({
  type: TOGGLE_POST_MODAL,
  payload: payload,
});
