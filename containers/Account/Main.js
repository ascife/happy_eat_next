import React from 'react';
import styles from './Main.module.scss';
import Card from '../../components/Card';

//Main Page Index
class MainIndex extends React.Component {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.sheep = props.parent.sheep;
  }

  render = ()=> {
    let {enabled, setEnabled} = this.sheep;

    return (
      <>
        <main className={styles.main}>
          <Card.ContSocialNet>
            <Card.SocialGoogle/>
            <Card.SocialFacebook/>
          </Card.ContSocialNet>
        </main>
      </>
    )
  }
}

export default MainIndex;