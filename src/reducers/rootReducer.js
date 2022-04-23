import { combineReducers } from "redux";
import TogglePostModalReducer from "./togglePostModalReducer";

const rootReducer = combineReducers({
  togglePostModalState: TogglePostModalReducer,
});

export default rootReducer;
