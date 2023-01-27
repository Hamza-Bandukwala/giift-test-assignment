import React from "react";
import homePage1 from "../../Assets/homePage1.png";
import homePage2 from "../../Assets/homepage2.png";
import homePage3 from "../../Assets/homepage3.png";
import homeOffer1 from "../../Assets/homeOffer1.png";
import homeOffer2 from "../../Assets/homeOffer2.png";
import homeOffer3 from "../../Assets/homeOffer3.png";
import homeOffer4 from "../../Assets/homeOffer4.png";
import homeOffer5 from "../../Assets/homeOffer5.png";
import homeOffer6 from "../../Assets/homeOffer6.png";

function Home() {
  return (
    <div>
      <img src={homePage1} alt="slides" className="w-full mb-10" />
      <div className="pt-5 pb-3">
        <h1 className="text-green-500 text-center text-2xl lg:text-5xl font-bold">
          Welcome to Rewarding Experiences
        </h1>
        <hr className="mx-auto hx my-5" width="5%" />
      </div>
      <div className="py-5 px-2 text-center text-gray-500 text-md">
        izy points brings you a collection of hand-picked and hard to say no to
        offers with
        <br /> unbelievable prices. you can redeem your izy points for almost
        everything
        <br /> from flights to hotel booking to gift vouchers and more.
      </div>
      <div className="px-4 lg:px-10 pt-5 mb-16">
        <div className="sm:flex-auto md:flex">
          <div className="w-full md:w-1/2 p-2">
            <img className="w-full" src={homeOffer1} alt="service1" />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <img className="w-full" src={homeOffer2} alt="service2" />
          </div>
        </div>
        <div className="sm:flex-auto md:flex">
          <div className="w-full md:w-1/2 p-2">
            <img className="w-full" src={homeOffer3} alt="service3" />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <img className="w-full" src={homeOffer4} alt="service4" />
          </div>
        </div>
        <div className="sm:flex-auto md:flex">
          <div className="w-full md:w-1/2 p-2">
            <img className="w-full" src={homeOffer5} alt="service5" />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <img className="w-full" src={homeOffer6} alt="service6" />
          </div>
        </div>
      </div>
      <div className="pt-5 pb-3">
        <h1 className="text-green-500 text-center text-2xl lg:text-5xl font-bold">
          Shop from your favorite brand
        </h1>
        <hr className="mx-auto hx my-5" width="5%" />
      </div>
      <div className="px-4 lg:px-10 mb-16">
        <img src={homePage2} alt="brands" className="w-full mb-10" />
      </div>
      <div className="pt-5 pb-3">
        <h1 className="text-green-500 text-center text-2xl lg:text-5xl font-bold">
          Participating Banks
        </h1>
        <hr className="mx-auto hx my-5" width="5%" />
      </div>
      <div className="px-4 lg:px-10  mb-20">
        <div className=" border-2 border-blue-500">
          <img src={homePage3} alt="banks" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
