'use client'

import React, { useEffect, useState } from "react";
import ProductList from "./allProducts";


export default function Home() {



/*   useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); */



    return (
      <main className='p-4 flex flex-col'>
        <h1>Products</h1>
        <div className='max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <ProductList />
        </div>
      </main>
  );
}
