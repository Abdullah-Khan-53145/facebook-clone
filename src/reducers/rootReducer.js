import { combineReducers } from "redux";
import TogglePostModalReducer from "./togglePostModalReducer";
import userReducer from "./userReducer";
import postImgReducer from "./postImgReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  togglePostModalState: TogglePostModalReducer,
  userState: userReducer,
  ImgState: postImgReducer,
  loadingState: loadingReducer,
});

export default rootReducer;
