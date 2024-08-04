import { Product } from "@/type";
import qs from 'query-string'


const URL = `${process.env.PUBLIC_API_URL}/products`;

interface Query {
     categoryId?:string,
     isFeatured?:boolean
}

const getProducts = async (query:Query):Promise<Product[]> =>{
     const url = qs.stringify({
        url:URL,
        query:{
          categoryId:query.categoryId,
          isFeatured:query.isFeatured
        }
     })
     const res = await fetch(URL);
     return  res.json();
}


export default getProducts;