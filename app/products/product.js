import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Product = () => {
  const [post, setPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const searchParams = useSearchParams();

  const getPostById = async (id) => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop/${id}`,
        {
          method: "GET",
        }
      );
      const { data } = await response.json();
      setPost(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostById(searchParams.get("id"));
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {post && (
        <div key={post.id}>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
              <div className="md:p-2 md:shadow rounded">
                <img
                  src={post.image.url}
                  alt={post.image.alt}
                  className="w-full h-full object-cover cursor-pointer rounded"
                  onClick={openModal}
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <div className="flex text-xl sm:items-center items-center justify-between">
                  <h1>{post.title}</h1>
                  <h2>{post.price} kr</h2>
                </div>
                <p className='flex-1'>{post.description}</p>
                <button className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2 rounded">Add to cart</button>
              </div>
            </div>
          </div>

          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 rounded" onClick={closeModal}>
              <div className="max-w-[90%] max-h-[90%] overflow-auto bg-white p-4 relative rounded">
                <button className="absolute top-0 right-0 m-2 px-3 py-1 bg-white border border-black text-black rounded hover:bg-gray-300" onClick={closeModal}>Close</button>
                <img
                  src={post.image.url}
                  alt={post.image.alt}
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Product;
