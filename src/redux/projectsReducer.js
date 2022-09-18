import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersProject: [
    {
      imgSrc: "",
      imgAlt: "",
      cardTitle: "",
      cardText: "",
      projectLink: "",
    },
  ],
};

const prjectsSlice = createSlice({
  name: "prjectsSlice",
  initialState,
  reducers: {
    userProject(state, action) {
      return {
        ...state,
        usersProject: action.payload,
      };
    },
  },
});

export const { userProject } = prjectsSlice.actions;
export default prjectsSlice.reducer;
