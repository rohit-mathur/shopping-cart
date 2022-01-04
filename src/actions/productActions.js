import { FILTER_PRODUCTS_BY_PRICE, GET_PRODUCTS_LIST } from "./index";

export const getProductsList = () => ({
    type: GET_PRODUCTS_LIST
})

export const filterProducts = (payload) => ({
    type: FILTER_PRODUCTS_BY_PRICE,
    payload
})