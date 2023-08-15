import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  dataFromClient: [],
  subTotalCart: 0,
  subTotalPrice: 0,
  ppn: 0,
  isExist: false,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const dataPayload = action.payload;

      const isExist = state.cart.find(
        (item) =>
          item.code === dataPayload.code &&
          item.size === dataPayload.size &&
          item.color === dataPayload.color
      );

      if (!isExist) {
        state.isExist = false;
        state.cart.push(action.payload);
        // console.log("data tidak ada");
      } else {
        state.isExist = true;
        // console.log(
        //   current(state),
        //   "<<< isExist ",
        //   dataPayload.color,
        //   dataPayload.size
        // );
      }

      const subtotalCart = state.cart.reduce(
        (acc, item) => acc + parseInt(item.cartStock),
        0
      );
      const subtotaPrice = state.cart.reduce(
        (acc, item) => acc + parseInt(item.cartStock) * item.price,
        0
      );
      const persentasePPN = 0.1;
      const pajak = subtotaPrice * persentasePPN;

      state.subTotalCart = subtotalCart;
      state.subTotalPrice = subtotaPrice;
      state.ppn = pajak;
      // console.log(current(subtotal), "<<< subtotal");
      //   console.log(state, "merupakan nilai dari initialState nya");
      // console.log(action, "action addCart"); // action merupakan nilai parameter yg dikirimkan oleh function addCart. jadi jika function memerlukan parameter, kamu bisa menambahkan action nya
    },
    history: (state, action) => {
      state.dataFromClient = action.payload;
    },
    updateCart: (state, action) => {
      const dataPayload = action.payload;

      const subtotalCart = state.cart.reduce(
        (acc, item) => acc + parseInt(item.cartStock),
        0
      );
      const subtotaPrice = state.cart.reduce(
        (acc, item) => acc + parseInt(item.cartStock) * item.price,
        0
      );
      const persentasePPN = 0.1;
      const pajak = subtotaPrice * persentasePPN;

      state.subTotalCart = subtotalCart;
      state.subTotalPrice = subtotaPrice;
      state.ppn = pajak;
      state.cart = dataPayload;
    },
  }, // tempat menyimpan function" untuk mengubah data yg disimpan di initialState
});

export const { history } = cartSlice.actions;
export const { updateCart } = cartSlice.actions;
export const { addCart } = cartSlice.actions; // nge destructuring function" yg ada di cartSlice.actions agar lebih mudah untuk akses nya

// console.log(cartSlice, "<<< cartSlice");
