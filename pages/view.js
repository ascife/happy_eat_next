import React from 'react';
import sheep from 'react-sheep';
import Router from 'next/router';
import Loader from '../components/Loader';
import Header from '../containers/View/Header';
import Main from '../containers/View/Main';
import Footer from '../containers/View/Footer';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.sheep = sheep(this);
    this.Header = Header;
    this.Main = Main;
    this.Footer = Footer;
  }

  goToPage = (route)=> {
    this.sheep.setEnabled("loader")();
    setTimeout(()=> Router.push(route), 800);
  }

  back = ()=> {
    this.sheep.setEnabled("loader")();
    setTimeout(()=> Router.back(), 800);
  }

  render = ()=> {
    let {Header, Main, Footer} = this;
    let {enabled, setEnabled} = this.sheep;
    
    return (
      <Loader.Blank show={enabled("loader")}>
        <Header parent={this}/>
        <Main parent={this}/>
        <Footer parent={this}/>
      </Loader.Blank>
    )
  }
}

export default View;