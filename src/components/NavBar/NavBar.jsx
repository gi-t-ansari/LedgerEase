import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { APP_URL } from "../../config";

function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to={APP_URL.CUSTOMER_PAGE} className="flex items-center">
          Customer
        </Link>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to={APP_URL.SUPPLIER_PAGE}>
          Supplier
        </Link>
      </Typography>
      {/* <div>
        <Button variant="filled">
          Log In
        </Button>
      </div> */}
    </ul>
  );

  return (
    <Navbar className="w-screen mx-auto max-w-screen-3xl px-6 py-2 lg:px-8">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h1"
          className="mr-4 cursor-pointer py-1.5 text-2xl"
        >
          LedgerEase
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
