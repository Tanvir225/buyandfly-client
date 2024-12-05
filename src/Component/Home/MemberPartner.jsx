import google from "../../assets/google.jpg";

const MemberPartner = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:flex items-center md:gap-10 bg-base-100 p-5 rounded-lg w-full shadow-lg">
      <section className="space-y-2 w-full ">
        <p className="font-semibold">Accredited Member</p>
        <div className="flex justify-center  gap-5">
          <div className="w-16">
            <img
              src={google}
              alt="google"
              className="h-full w-full rounded-xl"
            />
          </div>
          <div className="w-16">
            <img
              src={google}
              alt="google"
              className="h-full w-full rounded-xl"
            />
          </div>
          <div className="w-16">
            <img
              src={google}
              alt="google"
              className="h-full w-full rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="space-y-2 w-full text-center border-l-2 ">
        <p className="font-semibold">Verfied By</p>
        <div className="w-16 mx-auto">
          <img src={google} alt="google" className="h-full w-full rounded-xl" />
        </div>
      </section>
      <section className="space-y-2 w-full text-center border-l-2 ">
        <p className="font-semibold">Authorised By</p>
        <div className="w-16 mx-auto">
          <img src={google} alt="google" className="h-full w-full rounded-xl" />
        </div>
      </section>
      <section className="space-y-2 w-full text-center border-l-2">
        <p className="font-semibold">Our Partners</p>
        <div className="w-16 mx-auto">
          <img src={google} alt="google" className="h-full w-full rounded-xl" />
        </div>
      </section>
      <section className="space-y-2 w-full text-center border-l-2">
        <p className="font-semibold">Registered At</p>
        <div className="w-16 mx-auto">
          <img src={google} alt="google" className="h-full w-full rounded-xl" />
        </div>
      </section>
    </div>
  );
};

export default MemberPartner;
