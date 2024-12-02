import bali from "../../../assets/bali.jpg";
import cruise from "../../../assets/cruise.jpg";

const VisaCard = () => {
  return (
    <div className="card   space-y-3 group">
      <figure>
        <img src={bali} alt="visa" className="group-hover:scale-110 duration-300 delay-100" />
      </figure>
      <div className="space-y-2">
        <h2 className="text-lg font-bold">UAE Tourist Visa</h2>
        <p>Starting form AED 399*</p>
      </div>
    </div>
  );
};

export default VisaCard;
