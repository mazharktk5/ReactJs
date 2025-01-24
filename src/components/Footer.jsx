import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer bg-black text-white p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Mazhar Electronics Section */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Mazhar Electronics</h1>
              <p>Subscribe</p>
              <p>Get 10% off on your <br /> first order</p>
            </div>

            {/* Support Section */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Support</h1>
              <p>Main board bazar</p>
              <p>mazharahmad1@gmail.com</p>
            </div>

            {/* Account Section */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Account</h1>
              <p>My Account</p>
              <Link to="/login" className="text-white hover:underline">
                LogIn
              </Link>
              <Link to="/SignUp" className="text-white hover:underline">
                Register
              </Link>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Quick Links</h1>
              <p>About</p>
              <p>Privacy Policy</p>
              <p>FAQs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
