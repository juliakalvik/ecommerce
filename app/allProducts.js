import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const router = useRouter()

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const res = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchAllProducts();
  }, []);

  function onProductClick(newProduct) {
    router.push('/products?id='+newProduct);
}


  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onProductClick(product.id)}
          className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer"
        >
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-full h-[400px] object-cover"
          ></img>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between">
              <h3>{product.title}</h3>
              <h2>{product.price} kr</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
