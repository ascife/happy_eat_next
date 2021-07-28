import React from 'react';
import util from '../../util';
import {connect} from 'react-redux';
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import styles from './Main.module.scss';
import {setSelectedProduct} from '../../store/reducers/product';

//Main Page Home
class MainHome extends React.Component {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.sheep = props.parent.sheep;
    this.mapState = props.mapState;
    this.mapActions = props.mapActions;
  }

  render = ()=> {
    let {mapState, mapActions} = this.props;
    let parent = this.props.parent;
    let {enabled, setEnabled} = parent.sheep;

    let products = util.mapObject(mapState.products, (key, product)=> {

      function onClick() {
        mapActions.setSelectedProduct(product);
        parent.goToPage("/view")
      }

      return (
        <Card.Product 
          key={key}
          onClick={onClick}
          image={product.imageUrl}/>
      )
    })

    return (
      <>
        <main className={styles.main}>
          <div className={styles.header}>
            <p className={styles.sentence}>
              productos compartidos
            </p>
          </div>
          <div className={styles.body}>
            <Card.ContProduct>
              {products}
            </Card.ContProduct>
          </div>
          <Nav.PrimaryBottom parent={this.parent}/>
        </main>
      </>
    )
  }
}

const mapStateToProps = ({productReducer})=> {
  return {
    mapState: {
      products:  productReducer.products
    }
  }
}

const mapActionsToProps = (dispath)=> {
  return {
    mapActions: {
      setSelectedProduct: (product)=> 
      dispath(setSelectedProduct(product))
    }   
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MainHome);