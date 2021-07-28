import React from 'react';
import styles from './Footer.module.scss';

//Footer Page Home
class FooterHome extends React.Component {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.sheep = props.parent.sheep;
  }

  render = ()=> {
    let {enabled, setEnabled} = this.sheep;

    return (
      <>
        <footer className={styles.footer}>
          
        </footer>
      </>
    )
  }
}

export default FooterHome;