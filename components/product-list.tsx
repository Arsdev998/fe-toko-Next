import { Product } from "@/type";
import NoResult from "./ui/no-result";
import ProductCard from "./ui/product-card";
interface ProductsListProps {
  items: Product[];
  title: string;
}

const ProductsList: React.FC<ProductsListProps> = ({ items, title }) => {
  return (
    <div>
      <h3 className="font-bold text-xl">{title}</h3>
      <div className="flex flex-wrap">
       {items.length === 0 && <NoResult/>}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {items.map((item)=>(
        <ProductCard key={item.id} data={item}/> 
       ))}
       </div>
      </div>
    </div>
  );
};

export default ProductsList;
