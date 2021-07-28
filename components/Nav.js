import React from 'react';
import glue from 'event-glue';
import sheep from 'react-sheep';
import * as Icon from 'react-feather';
import styles from './styles/Nav.module.scss';

const Nav = {};

Nav.Primary = class extends React.Component {
  constructor(props) {
    super(props);
    this.sheep = sheep(this);
  }

  render = ()=> {
    let {position} = this.props;

    return (
      <>
        <nav className={styles.nav_primary} style={{position}}>
          <section className={styles.left}>
            <p className={styles.logo}>happy eat</p>
          </section>
          <section className={styles.right}>
            <img src="/image/round.svg" className={styles.figure}/>
          </section>
        </nav>
      </>
    )
  }
}

Nav.PrimaryBottom = class extends React.Component {
  constructor(props) {
    super(props);
    this.sheep = sheep(this);
  }

  render = ()=> {
    let {position, parent} = this.props;
    let {enabled, setEnabled} = this.sheep;

    return (
      <>
        <nav className={styles.nav_primary_bottom} style={{position}}>
          <button 
            onClick={glue(setEnabled("button:1"), ev => parent.goToPage("/home"))}
            active={enabled("button:1", true).toString()}
            className={styles.button}>
            <Icon.Home className={styles.icon}/>
          </button>
          <button 
            onClick={glue(setEnabled("button:2"), ev => parent.goToPage("/search"))}
            active={enabled("button:2").toString()}
            className={styles.button}>
            <Icon.Search className={styles.icon}/>
          </button>
          <button
            onClick={glue(setEnabled("button:3"), ev => parent.goToPage("/share"))}
            active={enabled("button:3").toString()} 
            className={styles.big_button}>
            <Icon.Share2 className={styles.icon}/>
          </button>
          <button 
            onClick={glue(setEnabled("button:4"), ev => parent.goToPage("/notifications"))}
            active={enabled("button:4").toString()}
            className={styles.button}>
            <Icon.Bell className={styles.icon}/>
          </button>
          <button 
            onClick={glue(setEnabled("button:5"), ev => parent.goToPage("/account"))}
            active={enabled("button:5").toString()}
            className={styles.button}>
            <Icon.User className={styles.icon}/>
          </button>
        </nav>
      </>
    )
  }
}

Nav.Secondary = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    let {label, onBack} = this.props;

    return (
      <>
        <nav className={styles.nav_secondary}>
          <button className={styles.back} onClick={onBack}>
            <Icon.ArrowLeft className={styles.icon}/>
          </button>
          <p className={styles.label}>{label}</p>
        </nav>
      </>
    )
  }
}

export default Nav;