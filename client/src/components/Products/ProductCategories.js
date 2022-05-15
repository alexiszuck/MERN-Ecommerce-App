import CategoryCard from "./CategoryCard";

function ProductCategories() {
  return (
    <main className="h-fit w-[80%] mx-auto">
      <div className="mb-10 font-poppins text-white font-semibold">Product Categories.</div>
      <div className="grid grid-cols-4 gap-4 h m-auto">
        <CategoryCard
          categoryTitle={'Technology'}
          productCategories={['Laptops', 'Monitors', 'Games']}
        />
        <CategoryCard
          categoryTitle={'Fashion'}
          productCategories={['Shoes', 'Hats', 'Jeans']}
        />
        <CategoryCard
          categoryTitle={'Sports'}
          productCategories={['Basketball', 'Tennis', 'Swimming']}
        />
        <CategoryCard
          categoryTitle={'Personal Care'}
          productCategories={['Suncreams', 'Perfumes', 'Dental Care']}
        />
      </div>
    </main>
  )
}

export default ProductCategories;