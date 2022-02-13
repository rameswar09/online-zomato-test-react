import { createSlice } from "@reduxjs/toolkit";

const userLoginInitialState = {
  signUpMsg: "",
  loginMsg: "",
};

const userLoginSlice = createSlice({
  name: "userAuthReducer",
  initialState: userLoginInitialState,
  reducers: {
    updateSignUpMsg(state, action) {
      state.signUpMsg = action.payload;
    },
  },
});

const createUser = (userData) => {
  return async (dispatch) => {};
};

export default userLoginSlice;
export const loginAction = userLoginSlice.actions;
