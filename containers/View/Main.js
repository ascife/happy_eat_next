import React from 'react';
import {connect} from 'react-redux';
import styles from './Main.module.scss';
import Button from '../../components/Button';

//Main Page View
class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.sheep = props.parent.sheep;
  }

  render = ()=> {
    let {mapState, mapActions} = this.props;
    let seletedProduct = mapState.seletedProduct;

    return (
      <>
        <main className={styles.main}>
          <div className={styles.block_one}>
            <img src={seletedProduct.imageUrl} className={styles.image}/>
            <div className={styles.body}>
              <p className={styles.sentence}>
                {seletedProduct.description}
              </p>
            </div>
            <div className={styles.footer}>
              <Button.ContPrimaryGrow>
                <Button.PrimaryGrow onClick={ev=>this.parent.goToPage("/ubication")}>
                  Ubicación
                </Button.PrimaryGrow>
              </Button.ContPrimaryGrow>
            </div>
          </div>
        </main>
      </>
    )
  }
}

const mapStateToProps = ({productReducer})=> {
  return {
    mapState: {
      seletedProduct: productReducer.selectedProduct
    }
  }
}

const mapActionsToProps = (dispath)=> {
  return {
    mapActions: {

    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MainView);