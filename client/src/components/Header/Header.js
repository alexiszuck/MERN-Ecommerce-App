import React from 'react';
import SearchBar from './SearchBar';
import PromotionBanner from './PromotionBanner';

const Header = () => {
  return (
    <header>
      <PromotionBanner />
      <SearchBar />
    </header>
  );
};

export default Header;