import React from 'react';
import HomeSearchBar from './HomeSearchBar';
import HomePromotionBanner from './HomePromotionBanner';

const HomeHeader = () => {
  return (
    <header className="flex flex-col sm:flex-col-reverse items-center">
      <div className="sm:hidden cursor-pointer text-mern-red font-bold text-2xl pt-5 font-poppins">
        M <span className="font-normal">|</span> E <span className="font-normal">|</span> R <span className="font-normal">|</span> N
      </div>
      <HomeSearchBar />
      <HomePromotionBanner />
    </header>
  );
};

export default HomeHeader;