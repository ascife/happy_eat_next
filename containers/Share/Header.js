import React from 'react';
import Nav from '../../components/Nav';
import styles from './Header.module.scss';

//Header Page Share
class HeaderShare extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    let {parent} = this.props;

    return (
      <>
        <header>
          <Nav.Secondary
            label="Compartir" 
            onBack={ev=>parent.goToPage("/home")}/>
        </header>
      </>
    )
  }
}

export default HeaderShare;