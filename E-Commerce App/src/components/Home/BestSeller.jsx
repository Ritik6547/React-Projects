import { useSelector } from 'react-redux'
import { selectBestSellers } from '../../store/slices/productSlice'
import Title from '../Title';
import ProductItem from '../productItem';

const BestSeller = () => {
    const bestSellerProdcuts = useSelector(selectBestSellers);


  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title text1="BEST" text2="SELLERS" />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
          minus consectetur
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          bestSellerProdcuts.slice(0,5).reverse().map((product) => (
            <ProductItem key={product._id} id={product._id} image={product.image} name={product.name} price={product.price} />
          )) 
        }
      </div>
    </div>
  )
}

export default BestSeller