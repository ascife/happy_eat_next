import React from 'react';
import Nav from '../../components/Nav';
import styles from './Header.module.scss';

//Header Page Index
class HeaderIndex extends React.Component {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.sheep = props.parent.sheep;
  }

  render = ()=> {
    let {parent} = this.props;
    let {enabled, setEnabled} = parent.sheep;

    return (
      <>
        <header className={styles.header}>
          <Nav.Secondary 
            label="Mi cuenta"
            onBack={ev=>parent.goToPage("/home")}/>
        </header>
      </>
    )
  }
}

export default HeaderIndex;