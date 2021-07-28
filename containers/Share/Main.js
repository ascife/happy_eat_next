import React from 'react';
import sheep from 'react-sheep';
import {connect} from 'react-redux';
import styles from './Main.module.scss';
import Field from '../../components/Field';
import Button from '../../components/Button';
import {AnimatePresence, motion} from 'framer-motion';
import {addProduct} from '../../store/reducers/product';

//Main Page Share
class MainShare extends React.Component {

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
    this.sheep = sheep(this);
    this.parent = props.parent;
    this.mapState = props.mapState;
    this.mapActions = props.mapActions;
    this.state = {
      product: {
        imageLocalUrl: undefined,
        image: undefined,
        description: "",
        ubication: ""
      }
    }
  }

  openExplorerFiles = ()=> {
    let input_file = document.createElement("input");
    input_file.type = "file";
    input_file.accept = ".png, .svg, .jpeg, .jpg";

    input_file.onchange = (ev)=> {
      let image = ev.target.files[0];
      let imageUrl = window.URL.createObjectURL(image);
      this.state.product.imageLocalUrl = imageUrl;
      this.state.product.image = image;
      this.sheep.setEnabled("step:2")();
    }

    input_file.click();
  }

  updateDescription = (ev)=> {
    let current = ev.currentTarget;
    let value = current.value;
    this.state.product.description = value;
    this.setState({});
  }

  updateUbication = (ev)=> {
    let current = ev.currentTarget;
    let value = current.value;
    this.state.product.ubication = value;
    this.setState({});
  }

  addProduct = async ()=> {
    let product = this.state.product;
    await this.mapActions.addProduct(product);
    this.parent.goToPage("/home");
  }

  render = ()=> {
    let {parent} = this.props;
    let {enabled, setEnabled} = this.sheep;

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

                <img src="/image/Share_1.svg" className={styles.image}/>
                <div className={styles.body}>
                  <p className={styles.big_sentence}>
                    sube la foto del producto que
                    vas a compartir
                  </p>
                </div>
                <div className={styles.footer}>
                  <Button.ContPrimaryGrow>
                    <Button.PrimaryGrow onClick={this.openExplorerFiles}>
                      Subir
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

                <img src={this.state.product.imageLocalUrl} className={styles.image}/>
                <div className={styles.body}>
                  <p className={styles.big_sentence}>
                    que es?
                  </p>
                  <Field.ContPrimary>
                    <Field.Primary 
                      onChange={this.updateDescription}
                      placeholder="escribe aqui"/>
                  </Field.ContPrimary>
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

                <img src="/image/Share_3.svg" className={styles.image}/>
                <div className={styles.body}>
                  <p className={styles.big_sentence}>
                    ubicación
                  </p>
                  <Field.ContPrimary>
                    <Field.Primary 
                      onChange={this.updateUbication}
                      placeholder="escribe aqui"/>
                  </Field.ContPrimary>
                </div>
                <div className={styles.footer}>
                  <Button.ContPrimaryGrow>
                    <Button.PrimaryGrow onClick={setEnabled("step:2")}>
                      Atras
                    </Button.PrimaryGrow>
                    <Button.PrimaryGrow onClick={this.addProduct}>
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

const mapStateToProps = (store)=> {
  return {
    mapState: {

    }
  }
}

const mapActionsToProps = (dispath)=> {
  return {
    mapActions: {
      addProduct: (product)=> dispath(addProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MainShare);