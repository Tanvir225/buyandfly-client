import logo from "/logo.svg";
import { CreditCard, Mail, MapPin, MoveUp, Phone } from "lucide-react";


const Footer = () => {

  //scroll top function
  const scrollTop = () => {
    window.scroll({
      top: 50,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#FFF9F5] p-7 lg:p-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:justify-items-end md:justify-items-stretch justify-items-stretch lg:gap-10 md:gap-6 gap-3">
        <div>
          <img src={logo} alt="logo" className="w-32" />
          <p className="font-medium text-[#7B6E7E] mt-3">
            Convenient routes and affordable fares to make your journey easy and budget-friendly.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[18px] text-[#111111]">Get In Touch</p>

          <p className="text-[14px] text-[#7B6E7E] font-medium mt-3 flex items-center gap-2">
            <MapPin size={22} className="bg-[#FFD7C1] p-1 text-[#EF5B0C] rounded-md" />
            Plati Gialos, Mykonos, Greece
          </p>

          <p className="text-[14px] text-[#7B6E7E] font-medium mt-2 flex items-center gap-2">
            <Phone size={22} className="bg-[#FFD7C1] p-1 text-[#EF5B0C] rounded-md" />
            +8801319.555.0115
          </p>

          <p className="text-[14px] text-[#7B6E7E] font-medium mt-2 flex items-center gap-2">
            <Mail size={22} className="bg-[#FFD7C1] p-1 text-[#EF5B0C] rounded-md" />
            felicia.reid@example.com
          </p>
        </div>

        <div>
          <p className="font-semibold text-[18px] text-[#111111]">Quick Links</p>

          <div className="flex flex-col space-y-2">
            <a className="text-[14px] text-[#7B6E7E] font-medium mt-2" href="">
              Contact
            </a>
            <a className="text-[14px] text-[#7B6E7E] font-medium mt-1" href="">
              About
            </a>
            <a className="text-[14px] text-[#7B6E7E] font-medium mt-1" href="">
              Bank Details
            </a>
            <a className="text-[14px] text-[#7B6E7E] font-medium mt-1" href="">
              ADM Policy
            </a>
            <a className="text-[14px] text-[#7B6E7E] font-medium mt-1" href="">
              Privacy Policy
            </a>
            <a className="text-[14px] text-[#7B6E7E] font-medium mt-1" href="">
              Terms And Conditions
            </a>
            <a className="text-[14px] text-[#7B6E7E] font-medium mt-1" href="">
              Booking Policy
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-[18px] text-[#111111]">We Accept</p>
          <div className="flex gap-3 mt-3">
            <p className="bg-[#FFD7C1] rounded-full p-3 w-fit text-[#EF5B0C]">
              <CreditCard size={20} />
            </p>
            <p className="bg-[#FFD7C1] rounded-full p-3 w-fit text-[#EF5B0C]">
              <CreditCard size={20} />
            </p>
            <p className="bg-[#FFD7C1] rounded-full p-3 w-fit text-[#EF5B0C]">
              <CreditCard size={20} />
            </p>
          </div>
        </div>
      </div>
      <div className="border border-[#DEE2E6] mt-6"></div>
      <div className="mt-7 flex items-center justify-between">
        <p className="font-medium text-[#7B6E7E]">Copyright © Buyandfly</p>
        <button onClick={scrollTop} className="text-white bg-[#EF5B0C] py-[10px] px-6 rounded-lg flex gap-1 items-center">Back To Top <MoveUp size={16} strokeWidth={2.25} /></button>
      </div>
    </div>
  );
};

export default Footer;
