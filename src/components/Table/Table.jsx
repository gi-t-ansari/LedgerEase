import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { Drawer } from "..";

export default function MembersTable({ data, type, totalAmount }) {
  return (
    <Card className="h-full md:w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="md:text-lg text-md"
            >
              {`${type} List`}
            </Typography>
            <Typography
              color="blue-gray"
              className="mt-1 font-normal md:text-lg text-sm flex align-center gap-1"
            >
              {"Total:"}
              <Typography
                variant="h6"
                color="blue-gray"
                className="font-normal md:text-lg text-sm"
              >
                <i className="fa-sharp fa-solid fa-indian-rupee-sign">{` ${totalAmount}`}</i>
              </Typography>
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Drawer type={type} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">
        <table className="mt-4 w-full min-w-auto table-auto">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 text-left">
                <Typography
                  variant="medium"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Name
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 text-right">
                <Typography
                  variant="medium"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Amount
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ amount, name }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className={`${classes} text-left`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} text-right`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      <i className="fa-sharp fa-solid fa-indian-rupee-sign">
                        {" "}
                        {amount}
                      </i>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
