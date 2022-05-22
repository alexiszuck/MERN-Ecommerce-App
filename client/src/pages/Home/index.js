import React from 'react';
import Stack from '@mui/material/Stack';
import HomeHeader from '../../components/modules/home/HomeHeader';
import ProductCategories from '../../components/Products/ProductCategories';
import ProductCard from '../../components/Products/ProductCard';

const Home = (props) => {
  const products = [
    { product_id: 1, category: "Fashion/Shoe", brand: "Nike", name: "Nike Waffle One", desc: "Bringing a new look to the iconic Waffle franchise, the Nike Waffle One balances everything you love most about heritage Nike running with fresh innovations", image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fd9c5b95-2a2e-4b8d-b9e0-62dafab6b32f/waffle-one-mens-shoes-4cW37x.png", price: 100, stars: 4.3 },
    { product_id: 2, category: "Test", brand: "Unknown", name: "NoName", desc: "no where", image: "https://picsum.photos/300/200", price: 345, stars: 1.2 }
  ];

  return (
    <Stack spacing={{ xs: 10, sm: 1 }}>
      <HomeHeader />
      <ProductCategories />
      {
        products.map((item, idx) => (
          <ProductCard key={`pd-${item.product_id}`} image={item.image} name={item.name} desc={item.desc} stars={item.stars} price={item.price} />
        ))
      }

    </Stack>
  );
};

export default Home;
