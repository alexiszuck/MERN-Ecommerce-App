import React from 'react';

import Header from './Header';
import ProductCategories from '../../Products/ProductCategories';

import ProductCard from '../../Products/ProductCard';

const Home = (props) => {
  return (
    <div className='flex flex-col gap-14 sm:gap-4'>
      <Header />
      <ProductCategories />
Lorem
      <div class='w-full flex flex-row justify-center gap-6 py-6 bg-gray-200'>
        <ProductCard
          className='flex-grow'
          image='https://cf.shopee.co.th/file/556c5efa383455cba37e5066a0f0b1ac'
          title='Lorem ipsum dolor...'
          stars={3.5}
          price={2.25}
        />
        <ProductCard
          className='flex-grow'
          image='https://cf.shopee.co.th/file/556c5efa383455cba37e5066a0f0b1ac'
          title='Lorem ipsum dolor...'
          stars={3.5}
          price={2.25}
        />
        <ProductCard
          className='flex-grow'
          image='https://cf.shopee.co.th/file/556c5efa383455cba37e5066a0f0b1ac'
          title='Lorem ipsum dolor...'
          stars={3.5}
          price={2.25}
        />
      </div>
    </div>
  );
};

export default Home;
