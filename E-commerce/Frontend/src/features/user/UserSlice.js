import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userStatus: false
};

export const registerUser = createAsyncThunk('user/registerUser',
  async (payload, { dispatch }) => {
    try {
      
    } catch (error) {
      
    }
  });

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // register: (state, action) => {
    //   state.user = action.payload
    // },
    // login: (state, action) => {
    //   state.user = action.payload
    // },
    // logout: (state) => {
    //   state.user = null
    // }
  },
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