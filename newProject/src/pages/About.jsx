import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounde-2xl shadow-lg p-8 space-y-8 ">
        <h1 className="text-4xl font-bold text-center">About Zaptro</h1>
        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-600">Zaptro</span>,
          your one-stop destination for the latest and greatest in market. From
          cutting-edge gadgets to must-have accessories , we're here to power up
          your tech life with premium products and unbeatable service.
        </p>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Misson</h2>
          <p className="text-gray-700 text-base">
            At Zaptro, our mission is to make innovation technology accessible
            to everyone. We're passionate about connecting people with the tools
            and tech they need to thrive in a digital world-all at competitive
            prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold  text-red-600">
            Why choose Zaptro?
          </h2>
          <ul className="list-disc pl-5 text-gray-700 spacey-2">
            <li>Top-Quality electronics products from trusted brands</li>
            <li>lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassile-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We envision a future where technology elevates everyday life. At
            Zaptro, we're comitted to staying ahead of the curve, offrering
            cutting edge solutions that are both practical and affortable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600  mb-2 ">
            Join the Zaptro family
          </h3>
          <p className="text-gray-700 mb-4">
            Whether you're a tech enthusist, a proffetional, or just looking for
            something cool and functional- Zaptro has something for everyone
          </p>
          <Link to={"/products"}>
            <button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
              Start shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
