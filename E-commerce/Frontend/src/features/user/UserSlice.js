import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { validateSignUpSchema } from "../../helpers/validation";
import { toast } from "react-toastify";

const url = 'http://localhost:4000'

const initialState = {
  user: null,
  userStatus: false
};

export const registerUser = createAsyncThunk('user/registerUser',
  async (payload) => {
    try {
      await validateSignUpSchema(payload);
      const res = await axios.post(`${url}/signup`, payload);
      toast.success(res.data.msg);
      console.log(res)
    } catch (error) {
      toast.error(error ? error.response.data.msg : error.message);
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


export default userSlice.reducer;