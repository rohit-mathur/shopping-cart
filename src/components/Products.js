import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, getProductsList } from '../actions/productActions';
import ProductCard from './ProductCard';

const Products = () => {
    const productsList = useSelector(state => state.productList);
    const dispatch = useDispatch();
    const [priceFilter, setPriceFilter] = React.useState({
        priceband1: false,
        priceband2: false
    })
    useEffect(() => {
        dispatch(getProductsList());
    }, [])
    useEffect(() => {
        if (priceFilter.priceband1) {
            dispatch(filterProducts('priceband1'))
        }
        if (priceFilter.priceband2) {
            dispatch(filterProducts('priceband2'))
        }
        if (priceFilter.priceband1 && priceFilter.priceband2) {
            dispatch(filterProducts('all'))
        }
    }, [priceFilter.priceband1, priceFilter.priceband2])
    const handleChange = (e) => {
        setPriceFilter({
            ...priceFilter,
            [e.target.name]: e.target.checked
        })
    }

    let data = priceFilter.priceband1 || priceFilter.priceband2 ? productsList.filteredResult : productsList.allProducts;
    return (
        <div>
            <h4>PRICE</h4>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Rs 1 to Rs 1000" name="priceband1" onChange={handleChange} />
                <Form.Check type="checkbox" label="Rs 1000 and above" name="priceband2" onChange={handleChange} />
            </Form.Group>
            <div style={{ display: 'flex' }}>
                <ProductCard data={data} />
            </div>
        </div>
    )
}

export default Products
