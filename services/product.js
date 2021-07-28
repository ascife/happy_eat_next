import axios from 'axios';
import util from '../util';

export const getProducts = ()=> {
  return new Promise((resolve, reject)=> {
    let url = `${"https://happy-eat-node.herokuapp.com"}/products/get_all`;

    axios.get(url)
    .then((response)=> {
      let data = response.data;
      
      if(data.error === true)
        //ignore error
        return;

      let products = data.map((product)=> {
        product.imageUrl = `${"https://happy-eat-node.herokuapp.com"}/${product.imageUrl}`;
        return product;
      })

      resolve({...products});
    })
  })
}

export const uploadProduct = (product)=> {
  return new Promise((resolve, reject)=> {
    let url = `${"https://happy-eat-node.herokuapp.com"}/products/upload`;
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
      product.imageUrl = `${"https://happy-eat-node.herokuapp.com"}/${product.imageUrl}`;
      resolve(product);
    })
  })
}