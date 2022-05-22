import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ProductCard = ({ image = 'https://picsum.photos/300/200', name = '', desc = '', stars = 0, price = 0 }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="picsum"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" justifyContent="space-between">
            {
              [...Array(5).keys()].map(n =>
                n < stars ?
                  stars - n >= 1 ?
                    <StarIcon key={`star-${n}`} sx={{ fontSize: 18 }} />
                    :
                    <StarHalfIcon key={`star-${n}`} sx={{ fontSize: 18 }} />
                  :
                  <StarBorderIcon key={`star-${n}`} sx={{ fontSize: 18 }} />
              )
            }
          </Stack>
          <Button size="small" color="primary">
            DETAIL
          </Button>
        </Stack>

      </CardActions>
    </Card>
  );
};

export default ProductCard;
