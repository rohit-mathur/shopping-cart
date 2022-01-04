import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductsList } from '../actions/productActions';

function ProductsDetail() {
    const productsList = useSelector(state => state.productList);
    const params = useParams();
    const dispatch = useDispatch();
    React.useEffect(() => {
        if(productsList.allProducts.length === 0){
            dispatch(getProductsList());
        }
    }, [])
    const handleClick = () => {
        localStorage.setItem("product", JSON.stringify(selectedProduct));
    }
    const selectedProduct = productsList.allProducts.filter((item) => item.id === Number(params.id))[0]
    return (
        <div>
            <h3>{selectedProduct?.productName}</h3>
            <p>{selectedProduct?.productDescription}</p>
            <p>{selectedProduct?.price}</p>
            <button onClick={handleClick}>Add To Crt</button>
        </div>
    )
}

export default ProductsDetail
