import React, { useState } from "react";
import { Drawer, Table } from "../components";
import emptyImg from "../assets/empty-img.png";
import { useSelector } from "react-redux";

function Supplier() {
  const data = useSelector((state) => state.data.value);

  const supplierData = data.filter((ele) => ele.type === "Supplier");

  const totalAmount = supplierData.reduce((acc, sum) => acc + sum.amount, 0);

  return (
    <>
      {supplierData.length > 0 ? (
        <div className="container py-4 md:px-10 px-2 md:flex md:flex-col md:items-center md:justify-center">
          <Table
            data={supplierData}
            type="Supplier"
            totalAmount={totalAmount}
          />
        </div>
      ) : (
        <>
          <div className="container py-4 px-10 flex flex-col items-center justify-center gap-2">
            <img src={emptyImg} alt="sticker" />
            <Drawer type="Supplier" />
          </div>
        </>
      )}
    </>
  );
}

export default Supplier;
