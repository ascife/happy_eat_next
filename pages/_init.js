import React from 'react';
import {useDispatch} from 'react-redux';
import {getProducts} from '../services/product';
import {initProducts} from '../store/reducers/product';

function Init(props) {
  const dispath = useDispatch();
 
  React.useEffect(()=> {
    getProducts().then((products)=> {
      dispath(initProducts(products));
    })
  }, [dispath])

  return (
    <>
      {props.children}
    </>
  )
}

export default Init;