import React, { useEffect, useState } from "react";
import Axios from "axios";
import ClientCardBlock from "./ClientCardBlock";
import ClientSubmit from "./ClientSubmit";

export default function Checkout() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const memory = window.JSON.parse(localStorage.getItem("cart"));

    Promise.all(
      memory.map((toy_id) =>
        Axios.get(`http://localhost:5000/toys/toy/${toy_id}`).then(
          (response) => response.data
        )
      )
    ).then((newData) => {
      setData(newData);
    });
  }, []);

  return (
    <div className="container">
      <h1 id="first_title">Mi carrito</h1>

      <ClientCardBlock data={data} />
      <ClientSubmit data={data} />
    </div>
  );
}
