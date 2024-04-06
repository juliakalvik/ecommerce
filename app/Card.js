import React from "react";
import { useRouter } from "next/navigation";
import useCart from "./(store)/store";

export default function Card({product}) {
    const { title, description, price, imageUrl, id } = product;
    
    return (
        <div>Card</div>
    )
}