import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./output.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
