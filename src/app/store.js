import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../redux/slices/dataSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
