import React, { useState } from "react";
import { Drawer, Table } from "../components";
import emptyImg from "../assets/empty-img.png";
import { useSelector } from "react-redux";

function Customer() {
  const data = useSelector((state) => state.data.value);

  const customerData = data.filter((ele) => ele.type === "Customer");

  const totalAmount = customerData.reduce((acc, sum) => acc + sum.amount, 0);

  return (
    <>
      {customerData.length > 0 ? (
        <div className="container py-4 md:px-10 px-2 md:flex md:flex-col md:items-center md:justify-center">
          <Table
            data={customerData}
            type="Customer"
            totalAmount={totalAmount}
          />
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
