import React from 'react';
import styles from './Main.module.scss';
import Button from '../../components/Button';
import {AnimatePresence, motion} from 'framer-motion';

//Main Page Index
class MainIndex extends React.Component {

  varinats = {
    block_one: {
      initial: {
        left: -20,
        opacity: 0,
      },
      animate: {
        left: 0,
        opacity: 1,
      },
      exit: {
        left: 20,
        opacity: 0,
      }
    }
  }

  constructor(props) {
    super(props);
  }

  render = ()=> {
    let {parent} = this.props;
    let {enabled, setEnabled} = parent.sheep;

    return (
      <>
        <main className={styles.main}>
          <AnimatePresence exitBeforeEnter>
            {
              enabled("step:1", true) &&
              <motion.div 
                key="step_1"
                className={styles.block_one}
                variants={this.varinats.block_one}
                initial="initial"
                animate="animate"
                exit="exit">

                <img src="/image/Index_1.svg" className={styles.image}/>
                <div className={styles.body}>
                  <p className={styles.mini_sentence}>con happy eat</p>
                  <p className={styles.big_sentence}>
                    ayudas a aquellos que no tengan comida
                  </p>
                </div>
                <div className={styles.footer}>
                  <Button.ContPrimaryGrow>
                    <Button.PrimaryGrow onClick={setEnabled("step:2")}>
                      Continuar
                    </Button.PrimaryGrow>
                  </Button.ContPrimaryGrow>
                </div>
              </motion.div>
            }
            {
              enabled("step:2") &&
              <motion.div 
                key="step_2"
                className={styles.block_one}
                variants={this.varinats.block_one}
                initial="initial"
                animate="animate"
                exit="exit">

                <img src="/image/Index_2.svg" className={styles.image}/>
                <div className={styles.body}>
                  <p className={styles.mini_sentence}>con happy eat</p>
                  <p className={styles.big_sentence}>
                    solo tienes que compartir para
                    ayudar
                  </p>
                </div>
                <div className={styles.footer}>
                  <Button.ContPrimaryGrow>
                    <Button.PrimaryGrow onClick={setEnabled("step:1")}>
                      Atras
                    </Button.PrimaryGrow>
                    <Button.PrimaryGrow onClick={setEnabled("step:3")}>
                      Continuar
                    </Button.PrimaryGrow>
                  </Button.ContPrimaryGrow>
                </div>
              </motion.div>
            }
            {
              enabled("step:3") &&
              <motion.div 
                key="step_3"
                className={styles.block_one}
                variants={this.varinats.block_one}
                initial="initial"
                animate="animate"
                exit="exit">

                <img src="/image/Index_3.svg" className={styles.image}/>
                <div className={styles.body}>
                  <p className={styles.mini_sentence}>con happy eat</p>
                  <p className={styles.big_sentence}>
                    seras la causa de estomago lleno
                    corazon contento 
                  </p>
                </div>
                <div className={styles.footer}>
                  <Button.ContPrimaryGrow>
                    <Button.PrimaryGrow onClick={setEnabled("step:2")}>
                      Atras
                    </Button.PrimaryGrow>
                    <Button.PrimaryGrow onClick={ev=> parent.goToPage("/home")}>
                      Continuar
                    </Button.PrimaryGrow>
                  </Button.ContPrimaryGrow>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </main>
      </>
    )
  }
}

export default MainIndex;