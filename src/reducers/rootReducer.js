import { combineReducers } from "redux";
import TogglePostModalReducer from "./togglePostModalReducer";
import userReducer from "./userReducer";
import postImgReducer from "./postImgReducer";

const rootReducer = combineReducers({
  togglePostModalState: TogglePostModalReducer,
  userState: userReducer,
  ImgState: postImgReducer,
});

export default rootReducer;
