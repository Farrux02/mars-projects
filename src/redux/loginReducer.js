import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modmeId: false
};

const loginSlice = createSlice({
    name: "loginReducer",
    initialState,
    reducers: {
      login(state, action) {
        return {
          ...state,
          modmeId: action.payload,
        };
      },
    },
  });
  
  export const { login } = loginSlice.actions;
  export default loginSlice.reducer;