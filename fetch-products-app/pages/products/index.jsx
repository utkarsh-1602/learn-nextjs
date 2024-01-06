import useDeleteProduct from "@/hooks/useDeleteProduct"
import useGetProducts from "@/hooks/useGetProducts"
import { useRouter } from "next/navigation"

const Products = () => {

    const router = useRouter()

    const { data: products, isLoading, error } = useGetProducts()
    const deleteProduct = useDeleteProduct('/api/products')

    const handleDeleteProduct = async (id) => {
        await deleteProduct(id)
    }

    const handleAddProduct = () => {
        // Navigate to the "add-product" route
        router.push('/products/add-product')
      };
    

    return (
        <>

            <div className="bg-black-900">
                <div className="container mx-auto p-4">
                <div className="flex items-center m-7">
                    <h1 className="text-2xl font-semibold text-white">All Products</h1>
                    <button 
                        onClick={handleAddProduct}
                        type="button"
                        className="bg-green-500 flex text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:bg-green-600 transform transition-transform duration-300 hover:scale-105 ml-5"
                    >
                        Add product
                    </button>
                </div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error.message}</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products.map(product => (
                                <div key={product.id} className="bg-white p-4 rounded shadow-lg">
                                    <img src={product.image} className="w-full h-48 object-cover mb-2 text-black" />
                                    <h2 className="text-lg font-semibold text-black">{product.title}</h2>
                                    <p className="text-gray-600">{product.description}</p>
                                    <p className="text-green-500 font-semibold mt-2">₹ {product.price}</p>
                                    <p className="text-blue-500 font-semibold mt-2">{product?.category}</p>
                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        type="button" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:bg-red-600 transform transition-transform duration-300 hover:scale-105">Remove from cart</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


export default Products