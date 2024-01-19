import React from "react";
import { NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Supplier, Customer } from "./pages";
import { APP_URL } from "./config";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route>
              <Route path={APP_URL.CUSTOMER_PAGE} element={<Customer />} />
              <Route path={APP_URL.SUPPLIER_PAGE} element={<Supplier />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
