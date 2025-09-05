import { useDispatch, useSelector } from "react-redux";
import { selectFilteredProducts } from "../store/slices/productSlice";
import { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import {
  selectCategoriesFilter,
  selectShowSearch,
  selectTypesFilter,
  toggleCategory,
  toggleTypes,
  updateSortBy,
} from "../store/slices/filtersSlice";
import FilterGroup from "../components/Collection/FilterGroup";
import SearchBar from "../components/Collection/SearchBar";

const Collection = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const categoriesFilter = useSelector(selectCategoriesFilter);
  const typesFilter = useSelector(selectTypesFilter);
  const showSearch = useSelector(selectShowSearch);
  const [showFilter, setShowFilter] = useState(false);

  const categories = ["Men", "Women", "Kids"];
  const types = ["Topwear", "Bottomwear", "Winterwear"];

  const handleChangeCategory = (e) => {
    dispatch(toggleCategory(e.target.value));
  };

  const handleChangeType = (e) => {
    dispatch(toggleTypes(e.target.value));
  };

  const handleChangeSort = (e) => {
    dispatch(updateSortBy(e.target.value));
  };

  return (
    <>
      {showSearch && <SearchBar />}
      <div className="flex flex-col gap-1 border-t pt-10 sm:flex-row sm:gap-10">
        {/* Filter Options */}
        <div className="min-w-60">
          <p className="my-2 flex cursor-pointer items-center gap-2 text-xl">
            FILTERS
            <img
              className={`h-3 sm:hidden ${showFilter && "rotate-90"}`}
              src={assets.dropdown_icon}
              alt="dropdown-icon"
              onClick={() => setShowFilter((prev) => !prev)}
            />
          </p>

          {/* Category Filter */}
          <FilterGroup
            title="categories"
            showFilter={showFilter}
            options={categories}
            selected={categoriesFilter}
            onChange={handleChangeCategory}
          />

          {/* SubCategory Filter */}
          <FilterGroup
            title={"type"}
            showFilter={showFilter}
            options={types}
            selected={typesFilter}
            onChange={handleChangeType}
          />
        </div>

        {/* Collections */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between text-base sm:text-2xl">
            <Title text1="ALL" text2="COLLECTIONS" />
            <select
              onChange={handleChangeSort}
              className="border-2 border-gray-300 px-2 text-sm"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product._id}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
