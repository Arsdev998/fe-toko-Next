"use client"

import { Product } from "@/type";
import Image from "next/image";

interface ProductCardProps {
    data:Product
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    return ( <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* iamge action */}
      <div className="aspect-square rounded-xl bg-gray-100 relative ">
        <Image alt={data?.name} src={data?.images?.[0]?.url} width={500} height={500}/>
      </div>
    </div> );
}
 
export default ProductCard;