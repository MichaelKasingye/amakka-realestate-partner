import { combineReducers } from "redux";

import UserReducer from "./user/UserSlice";
import ClientInterestReducer from "./ClientInterest/ClientInterestSlice";
import UserCodeReducer from "./userCode/UserCodeSlice";
// import imageReducer from "./images/imageSlice";
// import enrollmentReducer from "./enrollment/enrollmentSlice";

const rootReducer = combineReducers({
  User: UserReducer,
  ClientInterest: ClientInterestReducer,
  UserCode: UserCodeReducer,
  //   imageUrl: imageReducer,
  //   enrollment: enrollmentReducer,
});

export default rootReducer;
