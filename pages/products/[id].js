import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios"

const Product = () => {
    const [product, setProduct] = useState();
    const [sizeRiews, setSizeRiews] = useState();
    const router = useRouter();
    const {id} = router.query;

    async function getProduct(targetId) {
        const res = await axios.get(`/products/${targetId}`);
        const nextProduct = res.data;
        setProduct(nextProduct);
    }
    async function getSizeRiews(targetId) {
        const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
        const nextSizeRiews = res.data;
        setSizeRiews(nextSizeRiews);
    }

    useEffect(() =>{
        if (!id) return;

        getProduct(id);
        setSizeRiews(nextSizeRiews);
    }, [id]);

    if (!product) return null;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imgUrl} alt={product.name} />
        </div>
    )
}

export default Product;