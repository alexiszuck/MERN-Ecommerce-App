import Grid from '@mui/material/Grid';
import CategoryCard from "./CategoryCard";

function ProductCategories() {
  const categories = [
    { category_id: 1, title: 'Technology', subcategory: ['Laptops', 'Monitors', 'Games'] },
    { category_id: 2, title: 'Fashion', subcategory: ['Shoes', 'Hats', 'Jeans'] },
    { category_id: 3, title: 'Sports', subcategory: ['Basketball', 'Tennis', 'Swimming'] },
    { category_id: 4, title: 'Personal Care', subcategory: ['Suncreams', 'Perfumes', 'Dental Care'] },
  ];

  return (
    <Grid container rowSpacing={2} justifyContent="center" alignItems="center">
      {
        categories.map(item =>
          <Grid item key={`category-${item.category_id}`} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <CategoryCard categoryTitle={item.title} productCategories={item.subcategory} />
          </Grid>
        )
      }
    </Grid>
  )
}

export default ProductCategories;
