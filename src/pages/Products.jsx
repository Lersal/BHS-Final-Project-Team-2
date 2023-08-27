import React, { useState, useEffect } from "react";
import Axios from "axios";

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
      <div className="p-10 m-auto max-w-5xl grid grid-cols-4">
        {dataProducts.map((element) => (
          <div className="mx-2 my-2 px-2 py-2" key={element.id}>
            <img src={element.image} />
            <div className="flex justify-between text-zinc-400 text-sm font-bold">
              <span>{element.category}</span>
              <span>{element.tb}</span>
            </div>
            <h1 className="text-md font-bold text-zinc-600">{element.title}</h1>
            <div>
              <span className="text-lg font-bold text-zinc-400">
                {Number(element.price).toLocaleString("id-ID", {
                  currency: "IDR",
                  style: "currency",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
