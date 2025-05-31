import Logo from "../assets/car/Logo.svg";

export default function Footer() {
  return (
    <div className="flex w-full bg-white/25 justify-center">
      <footer className="w-full flex justify-between py-4 lg:max-w-5/8 min-w-7/8">
        <div></div>
        <p className="px-2 font-montserrat  text-sm font-medium">
          Copyright @ Siemon 2025
        </p>
        <img src={Logo} alt="My Icon" className="h-8" />
      </footer>
    </div>
  );
}
