import { Link } from "react-router-dom";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <section className="fixed top-0 w-full">
      {/* topbar */}

      <div className="bg-secondary text-white py-1">
        <div className="flex justify-center items-center lg:justify-between max-w-6xl mx-auto px-2">
          {/* text */}
          <div className="hidden text-sm  lg:block">
            <p>
              Wi-fi flights allowed, goverment notifies new rules on flights
              allowed
            </p>
          </div>

          {/* navigate to pages */}
          <div className="flex justify-center items-center text-sm md:text-base space-x-0 sm:space-x-1 md:space-x-1">
            <Link to={"/"}>Log in</Link>
            <div className="divider divider-horizontal"></div>
            <Link to={"/"}>Sign up</Link>
            <div className="divider divider-horizontal"></div>
            <Link to={"/"}>Agent Login</Link>
            <div className="divider divider-horizontal"></div>
            <Link to={"/"}>Customer Care</Link>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="bg-base-100 shadow-md py-2">
        <div className="max-w-6xl mx-auto px-2 flex items-center justify-between">
          {/* logo */}
          <section className="w-28 ">
            <img src={logo} alt="logo" />
          </section>
          {/* nav item */}
          <section>
            <ul className="uppercase flex items-center justify-center gap-5 ">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Flights</Link>
              </li>
              <li>
                <Link>Hotels</Link>
              </li>
              <li>
                <Link>HoliDays</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Navbar;