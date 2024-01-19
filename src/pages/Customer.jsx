import React, { useState } from "react";
import { Drawer } from "../components";
import emptyImg from "../assets/empty-img.png";

function Customer() {
  const [customerData, setcustomerData] = useState([]);

  return (
    <div className="container py-4 px-10 flex flex-col items-center justify-center gap-2">
      {customerData.length > 0 ? (
        <>
          <Drawer type="Supplier" />
        </>
      ) : (
        <>
          <img src={emptyImg} alt="sticker" />

          <Drawer type="Supplier" />
        </>
      )}
    </div>
  );
}

export default Customer;
