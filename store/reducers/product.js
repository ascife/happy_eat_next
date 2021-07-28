import {uploadProduct} from '../../services/product';

const _state = {
  products: {},
  selectedProduct: {}
}

const ADD_PRODUCT = "ADD_PRODUCT";
const INIT_PRODUCTS = "INIT_PRODUCTS";
const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";

export default function reducer(state=_state, action) {
  let updateState = (nstate)=> ({...state, ...nstate});

  if(action.type === INIT_PRODUCTS) {
    return updateState({
      products: action.products
    })
  }

  if(action.type === ADD_PRODUCT) {
    return updateState({
      products: {
        ...state.products,
        [action.product.id]: action.product,
      }
    })
  }

  if(action.type === SET_SELECTED_PRODUCT) {
    return updateState({
      selectedProduct: 
      action.product
    })
  }

  return state;
}

export const initProducts = (products)=> (dispath, getState)=> {
  dispath({
    type: INIT_PRODUCTS,
    products: products,
  })  
}

export const addProduct = (product)=> async (dispath, getState)=> {
  let uploadedProduct = await uploadProduct(product);
  return dispath({
    type: ADD_PRODUCT,
    product: uploadedProduct
  })
}

export const setSelectedProduct = (product)=> (dispath, getState)=> {  
  dispath({
    type: SET_SELECTED_PRODUCT,
    product: product
  })
}