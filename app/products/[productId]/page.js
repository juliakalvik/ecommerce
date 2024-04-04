

async function fetchProduct(id){
    const res = await fetch(`https://v2.api.noroff.dev/online-shop${id}`)
    const data = await res.json();
    return data
}

export default async function ProductPage({params}) {
    const product = await fetchProduct(params.id)
    console.log(params)
    
  
    return (
        <h1>details {product.id}</h1>
    )
};

