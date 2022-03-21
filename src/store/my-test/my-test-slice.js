import { createSlice } from "@reduxjs/toolkit";

const testReducer = createSlice({
  name: "My-test-reducer",
  initialState: {
    data: [1, 2, 3, 4],
  },
  reducers: {
    storeData(state, action) {
      console.log("this is storeData");
      state.data = action.payload;
    },
  },
});

export const getData = () => {
  return async (dispatch) => {
    try {
      let get = await fetch("https://jsonplaceholder.typicode.com/posts");
      get = await get.json();
      dispatch(testReducer.actions.storeData(get));
    } catch (e) {
      console.log(e);
    }
  };
};
export default testReducer;
export const testActon = testReducer.actions;
