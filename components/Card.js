import React from 'react';
import * as Icon from 'react-feather';
import styles from './styles/Card.module.scss';

const Card = {};

Card.ContProduct = function(props) {
  let {children} = props;

  return (
    <div className={styles.container_card_product}>
      {children}
    </div>
  )
}

Card.Product = function(props) {
  let {image, onEnter} = props;

  return (
    <div 
      onClick={onEnter}
      className={styles.card_product} {...props}>
      <img className={styles.image} src={image}/>

      <button className={styles.button} onClick={onEnter}>
        <Icon.ArrowRight className={styles.icon}/>
      </button>
    </div>
  )
}

Card.ContSocialNet = function(props) {
  let {children} = props;
  
  return (
    <div className={styles.container_card_social_net}>
      {children}
    </div>
  )
}

Card.SocialGoogle = function(props) {
  return (
    <div className={styles.card_social_google}>
      <img src="/image/Account_google.svg" className={styles.image}/>
      <p className={styles.b_sentence}>Ingresar con google</p>
    </div>
  )
}

Card.SocialFacebook = function(props) {
  return (
    <div className={styles.card_social_facebook}>
      <img src="/image/Account_facebook.svg" className={styles.image}/>
      <p className={styles.b_sentence}>Ingresar con google</p>
    </div>
  )
}

export default Card;