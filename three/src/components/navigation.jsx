import { Link } from "react-router-dom";
import Logo from "../assets/car/Logo.svg";
import Profile from "../assets/car/profile.svg";

export default function Navigation() {
  return (
    <div className="flex w-full py-6 bg-white/25 justify-center">
      <div className="lg:max-w-5/8 min-w-7/8 flex items-center justify-between">
        <img src={Logo} alt="My Icon" className="h-8" />
        <div className="flex items-center gap-4">
          <p className="px-2 font-montserrat text-lg font-semibold">Home</p>
          <Link to="/">
            <p className="px-2 font-montserrat text-primary text-lg font-bold">
              Online Evaluation
            </p>
          </Link>
          <p className="px-2 font-montserrat text-lg font-semibold">
            On-site Evaluation
          </p>
          <div className="flex gap-1 items-center">
            <img src={Profile} alt="" className="w-8 h-8 rounded-full" />
            <p className="px-2 font-montserrat text-lg font-semibold">
              Adaniel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
