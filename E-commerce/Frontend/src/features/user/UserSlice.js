import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:4000'

const initialState = {
  user: null,
  userStatus: false
};

export const registerUser = createAsyncThunk('user/registerUser',
  async (payload, { dispatch }) => {
    try {
      const res = await axios.post(`${url}/signup`, payload)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.userStatus = true;
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.userStatus = false;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.userStatus = true;
    });
  }
});

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;