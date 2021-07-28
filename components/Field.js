import React from 'react';
import styles from './styles/Field.module.scss';

const Field = {};

Field.ContPrimary = function(props) {
  let {children} = props;

  return (
    <div className={styles.container_field_primary}>
      {children}
    </div>
  )
} 

Field.Primary = function(props) {
  let {placeholder} = props;

  return (
    <div className={styles.field_primary}>
      <input type='text' 
      {...props}
      placeholder={placeholder}
      className={styles.input}/>
    </div>
  )
}

export default Field;