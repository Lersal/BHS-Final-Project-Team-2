import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartUniqlo from "./carts/page";
import AppLocation from "./maps/page";
import Home from "./pages/Home";
import ProductsByID from "./products/id/page";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { persistor, store } from "./stores";
import { PersistGate } from "redux-persist/integration/react";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/maps" element={<AppLocation />} />
              <Route path="/" element={<Home />} />
              <Route path="/products/id" element={<ProductsByID />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<CartUniqlo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
