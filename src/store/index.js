import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./user-login-slice";
import testReducer from "./my-test/my-test-slice";

const store = configureStore({
  reducer: { userAuth: userLoginSlice.reducer, myTest: testReducer.reducer },
});

export default store;
