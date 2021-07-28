import React from 'react';
import styles from './Main.module.scss';
import Button from '../../components/Button';

//Main Page Ubication
class MainUbication extends React.Component {
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
          <div className={styles.block_one}>
            <img src="/image/Search_1.svg" className={styles.image}/>
            <div className={styles.body}>
              <p className={styles.big_sentence}>
                selecciona en el mapa donde te
                encuentras
              </p>
            </div>
            <div className={styles.footer}>
              <Button.ContPrimaryGrow>
                <Button.PrimaryGrow>
                  Buscar
                </Button.PrimaryGrow>
              </Button.ContPrimaryGrow>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default MainUbication;