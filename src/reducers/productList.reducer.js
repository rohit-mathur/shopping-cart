import { FILTER_PRODUCTS_BY_PRICE, GET_PRODUCTS_LIST } from "../actions"

const initialState = {
    allProducts: [],
    filteredResult: []
}

const sampleData = [{
    img: 'https://m.media-amazon.com/images/I/31wMJ3DJshL.jpg',
    id: 1,
    productName: 'Product 1',
    productDescription: 'Description',
    price: 999
}, {
    img: 'https://m.media-amazon.com/images/I/31LfbUmIEIL.jpg',
    id: 2,
    productName: 'Product 2',
    productDescription: 'Description',
    price: 999
}, {
    img: 'https://m.media-amazon.com/images/I/51nB6lBzd6L._UX679_.jpg',
    id: 3,
    productName: 'Product 3',
    productDescription: 'Description',
    price: 999
}, {
    img: 'https://m.media-amazon.com/images/I/51DyOhs5RgL._UX679_.jpg',
    id: 4,
    productName: 'Product 4',
    productDescription: 'Description',
    price: 1999
}]
export const productList = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIST:
            return {
                ...state,
                allProducts: sampleData
            }
        case FILTER_PRODUCTS_BY_PRICE:
            let filtered;
            if (action.payload === 'priceband1') {
                filtered = state.allProducts.filter((product) => {
                    return product.price <= 1000
                })
            } else if (action.payload === 'priceband2') {
                filtered = state.allProducts.filter((product) => {
                    return product.price > 1000
                })
            } else {
                filtered = state.allProducts
            }
            return {
                ...state,
                filteredResult: filtered
            }
        default:
            return state;
    }
}