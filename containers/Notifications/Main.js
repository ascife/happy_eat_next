import React from 'react';
import styles from './Main.module.scss';

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
          <p className={styles.sentence}>No hay notificaciones</p>
        </main>
      </>
    )
  }
}

export default MainIndex;