import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Products(props) {
  const [dataProducts, setDataProducts] = useState([]);

  const getAllProducts = async () => {
    const { data } = await Axios.get(
      "http://localhost:3001/api/odiwhaodiwajioedawjoi"
    );
    return data;
  };

  useEffect(() => {
    getAllProducts()
      .then((data) => setDataProducts(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <div className="px-10 py-5 m-auto max-w-5xl grid grid-cols-4 gap-5">
        {dataProducts.map((element) => (
          <div className="mx-2 my-2 px-1 rounded shadow" key={element.id}>
            <div className="flex justify-center">
              <img src={element.image} className="h-44 w-auto " />
            </div>
            <div className="grid  row-span-full border-t-2 px-1 ">
              <div className="flex justify-between text-zinc-400 text-sm font-bold mt-2 ">
                <span>{element.category}</span>
                <span>{element.tb}</span>
              </div>
              <div className="h-24 w-auto">
                <h1 className="text-md font-bold text-zinc-600 my-2 font-sans ">
                  {element.title}
                </h1>
              </div>

              <div className="my-3">
                <span className="text-lg font-bold font-sans text-zinc-800 text-center">
                  {Number(element.price).toLocaleString("id-ID", {
                    currency: "IDR",
                    style: "currency",
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
