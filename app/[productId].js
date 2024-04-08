/* import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';

import ProductList from '../components/allProducts';

const Product = () => {
  const router = useRouter();
  const [productId, setProductId] = useState(router.query.productId);
  console.log("this is router",router.query)
  
  
  useEffect(() => {
      setProductId(router.query.productId);
      console.log(router.query)
  }, [router.query.productId]);

  return (
    <div>
      {productId !== undefined ? (
        <PostId params={{ id: productId }} />
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default Product;
 */