import React, { useState } from "react";
import { Drawer } from "../components";
import emptyImg from "../assets/empty-img.png"

function Supplier() {

  const [supplierData, setSupplierData] = useState([])

  return (
    <div className="container py-4 px-10 flex flex-col items-center justify-center gap-2">
      {supplierData.length > 0 ? (
        <>

          <Drawer type="Supplier" />
        </>
      ) : (
        <>
          <div>
            <img src={emptyImg} alt="sticker" />
          </div>
          <Drawer type="Supplier" />
        </>
      )}
    </div>
  )
}

export default Supplier