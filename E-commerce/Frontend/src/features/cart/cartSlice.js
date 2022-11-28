import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/cart.json';

const initialState = {
  cart: []
};

export const fetchItems = createAsyncThunk('cart/fetchItems',
  async () => {
    const res = await axios.get(url);
    let cartData = [];
    let data = res.data;
    for (let key in data) {
      cartData.push({
        cartId: key,
        id: data[key].id,
        name: data[key].name,
        image: data[key].image,
        price: data[key].price,
        count: data[key].count
      })
    }
    return cartData;
  }
)

export const addToCart = createAsyncThunk('cart/addToCart',
  async (values, { dispatch }) => {
    try {
      await axios.post(url, values);
      dispatch(fetchItems());
    } catch (error) {
      console.log(error)
    }
  }
);

export const increaseItemQuantity = createAsyncThunk('cart/increaseItemQuantity',
  async ({id, value}, { dispatch }) => {
    try {
      const res = await axios.put(`https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/cart/${id}.json`, value);
      dispatch(fetchItems());
      return { id: id, value: res.data };
    } catch (error) {
      console.log(error);
    }
  }
);

export const decreaseItemQuantity = createAsyncThunk('cart/decreaseItemQuantity',
  async ({ id, value }, { dispatch }) => {
    try {
      const res = await axios.put(`https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/cart/${id}.json`, value);
      dispatch(fetchItems());
      return { id: id, value: res.data }
    } catch (error) {
      console.log(error);
    }
  }
)

export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart',
  async (id, { dispatch }) => {
    console.log(id);
    try {
      await axios.delete(`https://react-grid-dashboard-857a2-default-rtdb.firebaseio.com/cart/${id}.json`);
      dispatch(fetchItems());     
    } catch (error) {
      console.log(error)
    }
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      console.log(action)
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(increaseItemQuantity.fulfilled, (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload.value
        } else {
          return product
        }
      })
    });
    builder.addCase(decreaseItemQuantity.fulfilled, (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload.value
        } else {
          return product
        }
      })
    })
  }
});

export default cartSlice.reducer;