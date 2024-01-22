import React, { useState } from "react";
import { Drawer } from "../components";
import emptyImg from "../assets/empty-img.png";


function Customer() {
  const [customerData, setCustomerData] = useState([]);

  return (
    <>
      {customerData.length > 0 ? (
        <div>
          <Drawer type="Customer" />
        </div>
      ) : (
        <div className="container py-4 px-10 flex flex-col items-center justify-center gap-2">
          <img src={emptyImg} alt="sticker" />
          <Drawer type="Customer" />
        </div>
      )}
    </>
  );
}

export default Customer;
