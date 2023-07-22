import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartUniqlo from "./carts/page";
import AppLocation from "./maps/page";
import Home from "./pages/Home";
import ProductsByID from "./products/id/page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsByID />} />
          <Route path="/cart" element={<CartUniqlo />} />
          <Route path="/maps" element={<AppLocation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
