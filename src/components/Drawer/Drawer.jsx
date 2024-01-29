import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../redux/slices/dataSlice";
import { InputWithController } from "../Common";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Radio,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function DrawerComponent({ type }) {
  const [open, setOpen] = useState(false);
  const [inputType, setInputType] = useState(type);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    phone: yup
      .string()
      .required("Phone number is Required")
      .matches(/^\d+$/, "Please Enter Only Numbers")
      .length(10, "Phone number must be 10 digits"),
    amount: yup
      .number("Entry must be a number")
      .required("Amount is required")
      .typeError("Entry must be a number"),
    type: yup.string(),
  });

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (formData) => {
    dispatch(update({ ...formData, type: inputType }));
    reset();
  };

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={openDrawer}
        variant="filled"
        className={`bottom-0 text-black`}
      >
        <Typography
          color="blue-gray"
          className="md:text-lg text-xs"
        >{`+ Add ${type}`}</Typography>
      </Button>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Add New Party
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <hr />
        <form
          className="flex flex-col gap-1 p-4"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <InputWithController
            control={control}
            name="name"
            label="Enter Party Name"
          />
          <InputWithController
            control={control}
            name="phone"
            label="Enter Phone Number"
          />
          <InputWithController
            control={control}
            name="amount"
            label="Enter Amount"
          />
          <div>
            <Typography color="blue-gray" className="-mb-3">
              Who are you?
            </Typography>
            <br />

            <Radio
              name="type"
              label="Customer"
              color="blue"
              ripple={true}
              value="Customer"
              checked={inputType === "Customer"}
              onChange={(e) =>
                setInputType(e.target.value ? "Customer" : "Supplier")
              }
            />
            <Radio
              name="type"
              label="Supplier"
              color="blue"
              ripple={true}
              value="Supplier"
              checked={inputType === "Supplier"}
              onChange={(e) =>
                setInputType(e.target.value ? "Supplier" : "Customer")
              }
              // {...register("type")}
            />
          </div>
          <Button variant="filled" type="submit">
            <Typography color="blue-gray">{`Add ${inputType}`}</Typography>
          </Button>
        </form>
      </Drawer>
    </div>
  );
}
