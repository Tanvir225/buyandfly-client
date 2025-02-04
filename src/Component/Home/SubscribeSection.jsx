import { Send } from "lucide-react";
import image from "../../assets/banner.png"

const SubscribeSection = () => {


  const getEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email)
  }



  return (
    <section className="bg-[#002E5B] p-5 lg:py-20">
      <div className=" max-w-6xl mx-auto  flex justify-between md:flex-row flex-col-reverse md:gap-5 gap-7 items-center">
        <div>
          <p className="font-semibold text-xl lg:text-3xl  text-white md:text-left text-center tracking-widest">
            Your Travel Journey <br /> Starts Here
          </p>
          <p className="font-medium text-white mt-4 leading-5 md:text-start text-center">Make your vacation memorable with hand picked customized packages Make your vacation </p>

          <form action="" onSubmit={getEmail} className="flex items-center gap-2 mt-5 mx-auto lg:justify-start justify-center">
            <input className="py-3 px-4 rounded-lg w-[352px]" type="email" name="email" id="email" placeholder="Insert your email here" />
            <button type="submit" className="text-white bg-[#EF5B0C] py-2 px-3 rounded-xl"><Send size={32} /></button>
          </form>
        </div>

        <div>
          <img className="rounded-2xl w-96" src={image} alt="" />
        </div>
      </div>
    </section>

  );
};

export default SubscribeSection;
