import { combineReducers } from "redux";
import TogglePostModalReducer from "./togglePostModalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  togglePostModalState: TogglePostModalReducer,
  userState: userReducer,
});

export default rootReducer;
