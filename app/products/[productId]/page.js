"use client"

import { useEffect, useState } from 'react';
import useCart from "../../(store)/store";

function ProductPage({ params }) {
    const [product, setProduct] = useState(null);
    const cartProduct = useCart(state => state.product);

    useEffect(() => {
        async function fetchProduct(id) {
            try {
                const res = await fetch(`https://v2.api.noroff.dev/online-shop${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }

        fetchProduct(params.id);
    }, [params.id]);

    return (
        <div>
            {product ? (
                <h1>details {product.id}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductPage;

