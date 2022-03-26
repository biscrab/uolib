import { createSlice } from '@reduxjs/toolkit'; // 1.

export const rootReducer = createSlice({  // 2.
 name: 'user', // 3.
 initialState: {   // 4.
    user: {
        id: "",
        email: ""
    }
 },
 reducers: {  // 5.
   setUser(state, action){
     state.user = action.payload;
   }
 },
});

export const { setUser } = rootReducer.actions;
export default rootReducer