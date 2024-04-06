"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'

const Product = () => {
    const [post, setPost] = useState(null);
    const searchParams = useSearchParams()  

    const getPostById = async (id) => {
        try {
            const response = await fetch(
                `https://v2.api.noroff.dev/online-shop/${id}`,
                {
                    method: "GET",
                }
                );
                const {data} = await response.json();
                setPost(data);
                console.log(data)
            }
            catch (error) {
                console.log(error);
            }
        };
        useEffect(() => {
                getPostById(searchParams.get("id"));
        }, []);
    

    return (
        <>
            { post && <div
              key={post.id}
              className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer"
            >
               <img
                src={post.image.url}
                alt={post.image.alt}
                className="w-full h-[400px] object-cover"
              ></img> 
              <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <h3>{post.title}</h3>
                  <h2>{post.price} kr</h2>
                </div>
              </div>
            </div>}
        </>
      );
};

export default Product;