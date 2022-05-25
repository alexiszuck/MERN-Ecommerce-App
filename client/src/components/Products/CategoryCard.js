import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SellIcon from '@mui/icons-material/Sell';

const CategoryCard = ({ categoryTitle = '', productCategories = [] }) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {categoryTitle}
          </Typography>
          {
            productCategories.map((item, idx) =>
              <Typography key={`pc-${idx}`} variant="body2" color="text.secondary">
                <SellIcon sx={{ fontSize: '0.9rem', verticalAlign: 'middle' }}/> {item}
              </Typography>)
          }
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
