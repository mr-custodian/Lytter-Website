import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
    >
      <NavbarBrand href="/">
        <img
          src="https://crapycycle.vercel.app/assets/Company%20Logo-ME0D46f9.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Lytter
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <Button onClick={() => window.location.href = "https://crapycycle.vercel.app/"}>
          Login
        </Button>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
         <Link to="/">
            <NavbarLink active>Home</NavbarLink>
        </Link>
         <Link to="/Segregator">
            <NavbarLink active>Segregator</NavbarLink>
        </Link>
         <Link to="/Recycler">
            <NavbarLink active>Recycler</NavbarLink>
        </Link>        
         <Link to="/Resources">
            <NavbarLink active>Resources</NavbarLink>
        </Link>
         <Link to="/GetInTouch">
            <NavbarLink active>Get In Touch</NavbarLink>
        </Link>        
      </NavbarCollapse>
    </Navbar>
  );
}


export default NavigationBar;