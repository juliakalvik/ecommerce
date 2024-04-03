async function fetchAllProducts() {
    const res = await fetch('https://v2.api.noroff.dev/online-shop');
    return res.json()
}

export default async function ProductList() {
    const apiResult = await fetchAllProducts()



    return (
        <>
            {apiResult.data.map((product) => (
                <div key={product.id} className="p-5">
                    <h3>{product.title}</h3>
                    <div>{product.image.url}</div>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
                </div>
            ))}
        </>
    )
}