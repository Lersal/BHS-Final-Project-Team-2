import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
  secretKey: "ggg", // Kunci rahasia untuk enkripsi
  onError: function (error) {
    // Tangani kesalahan enkripsi
    console.error("Error while encrypting:", error);
  },
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptor], // Gunakan transform enkripsi
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export const store = configureStore({
  reducer: {
    cartSlice: persistedReducer,
  }, // reducer" yg kita buat oleh slice, kita letakkan disini
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), // untuk menghilangkan warning error sementara
});

export const persistor = persistStore(store);
