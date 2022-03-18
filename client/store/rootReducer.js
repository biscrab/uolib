import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const userSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
    },
  }
})
export const { setName, setAge } = userSlice.actions;
export default userSlice.reducer;