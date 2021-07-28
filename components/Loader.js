import React from 'react';
import styles from './styles/Loader.module.scss';

const Loader = {};

Loader.Blank = function(props) {
  let {children, show} = props;

  return (
    <>
      {children}
      {
        show &&
        <div className={styles.loader_blank}></div>
      }
    </>
  )
}

export default Loader;