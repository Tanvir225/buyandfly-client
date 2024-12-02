import country from "../../../assets/america.jpg";
import Button from "../../Shared/Button";
const CountryPackageCard = () => {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={country} alt="country" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-lg font-semibold text-center">
          Free And easy 3 nights
        </h2>
        <p className="text-gray-600 font-semibold">Price Start From 🚀</p>
        <p className="text-gray-800 font-semibold">💸 AED 515 pp</p>
        <p className="text-gray-900 font-semibold text-sm">Dubai 3 nights</p>
        <div className="space-y-3">
          <div className="border-t-2 border-secondary w-1/2 mx-auto"></div>
          <Button text="Explore Trip"></Button>
        </div>
      </div>
    </div>
  );
};

export default CountryPackageCard;
