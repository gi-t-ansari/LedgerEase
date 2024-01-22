import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../features/data/dataSlice";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Radio,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function DrawerComponent({ type, position }) {
  const [open, setOpen] = useState(false);
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    phone: yup
      .number()
      .required("Number is required")
      .typeError("Entry must be a number"),
    amount: yup
      .number()
      .required("Amount is required")
      .typeError("Entry must be a number"),
    type: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (formData) => {
    dispatch(update(formData));
    reset();
  };

  console.log(data);

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={openDrawer}
        variant="filled"
        className={`text-black ${position} bottom-0`}
      >
        <Typography color="blue-gray">{`+ Add ${type}`}</Typography>
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
          className="flex flex-col gap-6 p-4"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div>
            <Typography color="blue-gray" className="-mb-3">
              Party Name
            </Typography>
            <br />
            <Input type="text" label="Enter Party Name" {...register("name")} />
            <span>{errors.name?.message}</span>
          </div>
          <div>
            <Typography color="blue-gray" className="-mb-3">
              Phone Number
            </Typography>
            <br />
            <Input
              type="number"
              label="Enter Phone Number"
              {...register("phone")}
            />
            <span>{errors.phone?.message}</span>
          </div>
          <div>
            <Typography color="blue-gray" className="-mb-3">
              Opening Balance
            </Typography>
            <br />
            <Input
              type="text"
              label="Enter Amount"
              icon={<i className="fa-sharp fa-solid fa-indian-rupee-sign"></i>}
              {...register("amount")}
            />
            <span>{errors.amount?.message}</span>
          </div>
          <div>
            <Typography color="blue-gray" className="-mb-3">
              Who are you?
            </Typography>
            <br />
            {type === "Customer" ? (
              <>
                <Radio
                  name="type"
                  label="Customer"
                  color="blue"
                  ripple={true}
                  value="Customer"
                  defaultChecked
                  {...register("type")}
                />
                <Radio
                  name="type"
                  label="Supplier"
                  color="blue"
                  ripple={true}
                  value="Supplier"
                  {...register("type")}
                />
              </>
            ) : (
              <>
                <Radio
                  name="type"
                  label="Customer"
                  color="blue"
                  ripple={true}
                  value="Customer"
                  {...register("type")}
                />
                <Radio
                  name="type"
                  label="Supplier"
                  color="blue"
                  ripple={true}
                  value="Supplier"
                  defaultChecked
                  {...register("type")}
                />
              </>
            )}
          </div>
          <Button variant="filled" type="submit">
            <Typography color="blue-gray">{`Add ${type}`}</Typography>
          </Button>
        </form>
      </Drawer>
    </div>
  );
}
