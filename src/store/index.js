import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./user-login-slice";

const store = configureStore({
  reducer: { userAuth: userLoginSlice.reducer },
});

export default store;
