import React from 'react';

import PromotionBanner from './PromotionBanner';
import SearchBar from './SearchBar';


function Header() {
  return (
    <header>
      <PromotionBanner />
      <SearchBar />
    </header>
  )
};

export default Header;