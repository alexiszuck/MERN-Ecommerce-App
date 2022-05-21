import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import Card from '../../ui/Card';

const ProductCard = ({ image, title, stars = 0, price = 0 }) => {
  const productName = title && (
    <div className='font-bold text-xl mb-2'>{title}</div>
  );
  const starArr = [1, 2, 3, 4, 5];
  return (
    <Card
      image={image}
      body={
        <>
          {productName}
          {starArr.map((starNumber, index) => {
            let [digit, frac] = parseFloat(stars).toFixed(1).split('.');
            digit = parseInt(digit);
            frac = parseInt(frac);
            if (digit === starNumber && frac === 0)
              return <StarIcon key={index} />;
            if (digit === index && frac > 0)
              return <StarHalfIcon key={index} />;

            if (digit > index) return <StarIcon key={index} />;
            return <StarBorderIcon key={index} />;
          })}
        </>
      }
      footer={<span className="text-sm">Starting Price: ${price} </span>}
    />
  );
};

export default ProductCard;
