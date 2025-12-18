import React from 'react'
import { getProducts} from '@/prisma-db'

type Product = {
    id:number;
    title:string;
    price:number;
    description:string | null;
}

const Products = async() => {
    const products : Product[] = await getProducts()
    console.log(products)
    return (
    <>
    <div>Products </div>
    <ul>
      {products.map((product)=>(
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
    </>
  )
}

export default Products