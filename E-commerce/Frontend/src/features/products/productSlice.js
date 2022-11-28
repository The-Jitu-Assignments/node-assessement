import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { validateProductSchema } from "../../helpers/validation";
import { toast } from "react-toastify";

const url = 'http://localhost:4000/products'

const initialState = {
  products: [],
  cart: [],
  message: ''
};

export const fetchProducts = createAsyncThunk('product/fetchProducts',
  async () => {
    const res = await axios.get(url); 
    return res.data;
  }
)

export const createProduct = createAsyncThunk('product/createProduct',
  async (values, { dispatch }) => {
    try {
      await validateProductSchema(values)
      const res = await axios.post(url, values);
      toast.success(res.data.msg)
      dispatch(fetchProducts())
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk('product/updateProduct',
  async ({id, values}, {dispatch}) => {
    try {
      const res = await axios.put(`url/${id}`, values)
      console.log(res);
      return { id, values: res.data.data}
    } catch (error) {
      console.log(error);
    }
  }
);


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.message = action.payload;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
    })
  }
})

export default productSlice.reducer;