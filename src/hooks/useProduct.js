import { useEffect, useState } from "react"
import { getProductById } from "../data/products";

const useProduct =() =>{
    const [product, setProduct] = useState({});
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        getProductById(productId)
        .then((data)=>{
            setProduct(data);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [])

    return {product, loading}
}

export default useProduct;