'use client'
import Product from "./product";

export default function ProductPage() {
    return (
      <main className='p-4 flex flex-col'>
        <h1>Spesific product:</h1>
        <div className='max-w-[600px] h-full w-full mx-auto gap-4'>
            <Product /> 
        </div>
      </main>
  );
}
