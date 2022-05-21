import React from 'react';

import HomeHeader from '../../components/modules/home/HomeHeader';
import ProductCategories from '../../components/Products/ProductCategories';

const Home = (props) => {
  return (
    <div className='flex flex-col gap-14 sm:gap-4'>
      <HomeHeader />
      <ProductCategories />
    </div>
  );
};

export default Home;
