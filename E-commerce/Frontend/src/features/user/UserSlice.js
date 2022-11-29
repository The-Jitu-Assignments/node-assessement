import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { validateSignUpSchema } from "../../helpers/validation";
import { toast } from "react-toastify";

const url = 'http://localhost:4000'

const initialState = {
  user: null,
  successStatus: false,
  error: ''
};

export const registerUser = createAsyncThunk('user/registerUser',
  async (payload, thunkApi) => {
    console.log(thunkApi)
    try {
      await validateSignUpSchema(payload);
      const res = await axios.post(`${url}/signup`, payload);
      toast.success(res.data.msg);
      console.log(res)
      return res;
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message);
      let errorValue = error.response ? error.response.data.msg : error.message;
      return thunkApi.rejectWithValue(errorValue);
    }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.successStatus = false;
    })
    builder.addCase(registerUser.fulfilled, (state) => {
      state.successStatus = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.successStatus = false;
    });
  }
});


export default userSlice.reducer;