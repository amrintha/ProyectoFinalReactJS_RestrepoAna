import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore";
import db from "../db/db.js";

const useProduct = (productId) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const getProduct = async () => {
        try {
            const docRef = doc(db, "products", productId)
            const dataDb = await getDoc(docRef);

            if (dataDb.exists()) {
                const data = { id: dataDb.id, ...dataDb.data() };
                setProduct(data);
            } else {
                setProduct(null);
            }

        } catch (error) {
            setProduct(null);
        } finally {
            setLoading(false);

        }
    }
    useEffect(() => {
        getProduct();
    }, [])

    return { product, loading }
};

export default useProduct;