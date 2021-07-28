import axios from 'axios';
import util from '../util';

export const getProducts = ()=> {
  return new Promise((resolve, reject)=> {
    let url = "http://192.168.0.107:4000/products/get_all";

    axios.get(url)
    .then((response)=> {
      let data = response.data;
      
      if(data.error === true)
        //ignore error
        return;

      let products = data.map((product)=> {
        product.imageUrl = `http://192.168.0.107:4000/${product.imageUrl}`;
        return product;
      })

      resolve({...products});
    })
  })
}

export const uploadProduct = (product)=> {
  return new Promise((resolve, reject)=> {
    let url = "http://192.168.0.107:4000/products/upload";
    let formData = new FormData();
    
    util.mapObject(product, (key, value)=> {
      formData.set(key, value);
    })

    axios.post(url, formData)
    .then((response)=> {
      let data = response.data;

      if(data.error === true)
        //ignore error
        return;

      let product = data;
      product.imageUrl = `http://192.168.0.107:4000/${product.imageUrl}`;
      resolve(product);
    })
  })
}