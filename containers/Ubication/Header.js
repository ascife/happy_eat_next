import React from 'react';
import Nav from '../../components/Nav';
import styles from './Header.module.scss';

//Header Page Ubication
class HeaderUbication extends React.Component {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.sheep = props.parent.sheep;
  }

  render = ()=> {
    let {parent} = this.props;
    return (
      <>
        <header>
          <Nav.Secondary 
            label="Ubicacion"
            onBack={ev=>parent.goToPage("/home")}/>
        </header>
      </>
    )
  }
}

export default HeaderUbication;