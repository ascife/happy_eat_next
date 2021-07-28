import React from 'react';
import Nav from '../../components/Nav';
import styles from './Header.module.scss';

//Header Page Home
class HeaderHome extends React.Component {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.sheep = props.parent.sheep;
  }

  render = ()=> {
    let {enabled, setEnabled} = this.sheep;

    return (
      <>
        <header className={styles.header}>
          <Nav.Primary position="sticky"/>
        </header>
      </>
    )
  }
}

export default HeaderHome;