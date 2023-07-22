import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartUniqlo from "./carts/page";
import AppLocation from "./maps/page";
import Home from "./pages/Home";
import ProductsByID from "./products/id/page";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsByID />} />
          <Route path="/cart" element={<CartUniqlo />} />
          <Route path="/maps" element={<AppLocation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
