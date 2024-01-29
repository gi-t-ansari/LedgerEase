import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "@material-tailwind/react";

function InputWithController({ control, name, label }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div>
          <Input {...field} label={label} error={fieldState.error} />{" "}
          <span className="text-xs text-red-500 ml-1">{fieldState.error?.message}</span>{" "}
        </div>
      )}
    />
  );
}

export default InputWithController;
