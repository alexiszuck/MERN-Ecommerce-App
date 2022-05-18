

const CategoryCard = props => {
  return (
    <div className="w-44 shrink-0 rounded-lg bg-card-orange shadow-xl text-center text-white m-2 md:m-5 p-2 pb-5">
      <p className="font-semibold p-3">{props.categoryTitle}</p>
      <ul>
        {props.productCategories.map(category =>
          <li className="p-1" key={Math.random() * 1 + 1}> {category} </li>)}
      </ul>
    </div>
  );
};

export default CategoryCard;