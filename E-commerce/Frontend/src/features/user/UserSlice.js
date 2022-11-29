import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { validateSignUpSchema } from "../../helpers/validation";
import { toast } from "react-toastify";

const url = 'http://localhost:4000'

const initialState = {
  user: null,
  successStatus: false
};

export const registerUser = createAsyncThunk('user/registerUser',
  async (payload) => {
    try {
      await validateSignUpSchema(payload);
      const res = await axios.post(`${url}/signup`, payload);
      toast.success(res.data.msg);
      console.log(res)
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
    }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.userStatus = false;
    })
    builder.addCase(registerUser.fulfilled, (state) => {
      state.successStatus = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.userStatus = false;
    });
  }
});


export default userSlice.reducer;