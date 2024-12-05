import footerImage from "../../assets/footer-1.jpg";
import logo from "/logo.svg";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiYoutubeLogoLight } from "react-icons/pi";
const Footer = () => {
  return (
    <footer
      className="hero md:h-[120vh] object-cover bg-transparent md:-mt-48"
      style={{
        backgroundImage: `url(${footerImage})`,
     
      }}
    >
      <div
        className="hero-overlay bg-opacity-80 bg-[#FAFAFA]"
        style={{
         
        }}
      >
        <section className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 justify-between py-36 px-5  ">
          <div className="space-y-5">
            <div className="w-32">
              <img src={logo} alt="logo" />
            </div>
            <p>address</p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-primary">Useful links</h2>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Accessbelity Plan
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Lates News
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Careers
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Feedback
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Contacts
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Tender
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-primary">Other Links</h2>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Biman Govt. Portal
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Biman Flight Catering Center
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Civil Aviation Authority
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Minister Health And Family Welfear
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-primary">
              Parjanta Corporation
            </h2>

            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Online Travel Agency
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Booking Policy
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              ADM Policy
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto font-semibold flex flex-col lg:flex-row items-center justify-between mb-5">
          <div className="flex gap-10 ">
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              CEO's Message
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Lates News
            </p>
            <p
              className="text-lg hover:border-b-2 hover:border-secondary hover:transition-all delay-100 duration-200"
              role="button"
            >
              Careers
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <PiFacebookLogoLight
              size={50}
              role="button"
              className="rounded-full bg-sky-100 p-1"
            ></PiFacebookLogoLight>
            <PiYoutubeLogoLight
              size={50}
              role="button"
              className="rounded-full bg-sky-100 p-1"
            ></PiYoutubeLogoLight>
          </div>
        </section>

        <section className="max-w-6xl mx-auto text-lg font-semibold flex flex-col lg:flex-row items-center justify-between pb-5">
          <div className="flex flex-col justify-center lg:flex-row items-center gap-5">
            <p className=" text-secondary">© IT Division</p>
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" />
              <p>BuyAndFly</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <p className=" text-secondary">We Accept</p>
            <div className="flex justify-center items-center gap-2">
              <img
              className="w-12 rounded-lg"
                src="https://www.shutterstock.com/image-vector/vinnytsia-ukraine-september-04-2023-600nw-2357100277.jpg"
                alt="logo"
              />
              <img
              className="w-12 rounded-lg"
                src="https://www.shutterstock.com/image-vector/vinnytsia-ukraine-september-04-2023-600nw-2357100277.jpg"
                alt="logo"
              />
              <img
              className="w-12 rounded-lg"
                src="https://www.shutterstock.com/image-vector/vinnytsia-ukraine-september-04-2023-600nw-2357100277.jpg"
                alt="logo"
              />
              <img
              className="w-12 rounded-lg"
                src="https://www.shutterstock.com/image-vector/vinnytsia-ukraine-september-04-2023-600nw-2357100277.jpg"
                alt="logo"
              />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
