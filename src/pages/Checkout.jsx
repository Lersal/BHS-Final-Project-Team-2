import React, { useState } from "react";

const Checkout = () => {
  const [name, setName] = useState("");
  const [order_id, setOrder_id] = useState("");
  const [total, setTotal] = useState("");

  const process = async () => {
    const data = {
      name: name,
      order_id: order_id,
      total: total,
    };
    console.log(data);
  };

  return (
    <div>
      <form className="flex flex-col h-full w-1/5 p-4">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 border-2"
        />
        <input
          type="text"
          placeholder="Order Id"
          value={order_id}
          onChange={(e) => setOrder_id(e.target.value)}
          className="mb-2 border-2"
        />
        <input
          type="text"
          placeholder="Total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="mb-2 border-2"
        />
      </form>
      <button
        type="submit"
        onClick={process}
        className="mx-4 p-1 border-2 border-sky-600"
      >
        Prosess
      </button>
    </div>
  );
};

export default Checkout;
