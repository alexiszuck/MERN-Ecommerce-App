import React from 'react';

import Header from './Header';
import ProductCategories from '../../Products/ProductCategories';

const Home = (props) => {
  return (
    <div className='flex flex-col gap-14 sm:gap-4'>
      <Header />
      <ProductCategories />
    </div>
  );
};

export default Home;
