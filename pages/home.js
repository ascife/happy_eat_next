import React from 'react';
import Router from 'next/router';
import sheep from 'react-sheep';
import Loader from '../components/Loader';
import Header from '../containers/Home/Header';
import Main from '../containers/Home/Main';
import Footer from '../containers/Home/Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.sheep = sheep(this);
    this.Header = Header;
    this.Main = Main;
    this.Footer = Footer;
  }

  goToPage = (route)=> {

    if(route === "/home")
      return;

    this.sheep.setEnabled("loader")();
    setTimeout(()=> Router.push(route), 800);
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

export default Home;