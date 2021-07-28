import React from 'react';
import glue from 'event-glue';
import styles from './styles/Button.module.scss';

const Button = {};

Button.Default = function(props) {
  let {children, className} = props;

  return (
    <button
      className={className} {...props}>
      {children}
    </button>
  )
}

Button.ContPrimaryGrow = function(props) {
  let {children} = props;
  let className = `${styles.container_button_primary_grow} ${props.className}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}

Button.PrimaryGrow = function(props) {
  let {children} = props;

  return (
    <Button.Default 
      {...props} className={styles.button_primary_grow}>
      {children}
    </Button.Default>
  )
}

export default Button;