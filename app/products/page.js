'use client'
import Product from "./product";

export default function ProductPage() {
    return (
      <main className='p-4 flex flex-col'>
        <h1>Spesific product:</h1>
        <div className='max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <Product /> 
        </div>
      </main>
  );
}
