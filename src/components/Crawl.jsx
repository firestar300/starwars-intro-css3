import React, { Component, Fragment } from 'react'
import logo from '../assets/images/starwars-logo.png'

class Crawl extends Component {
  componentWillMount() {
    this.timer = setTimeout(() => {
      window.location.hash = '/';
    }, 95000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  render() {
    const { movie: { crawlText, episode, title }} = this.props

    return (
      <Fragment>
        <p id="start">Il y a bien longtemps dans une galaxie lointaine très lointaine....</p>

        <img src={logo} alt="Star Wars" className="logo" />

        <div id="titles">
          <div id="titlecontent">
            <p className="title center">Episode <span className="roman">{episode}</span></p>
            <p className="sub center">{title}</p>
            <br />
            <div dangerouslySetInnerHTML={{__html: crawlText}} />
          </div>
        </div>

        <audio autoPlay>
          <source src="sounds/intro.mp3"></source>
          <source src="sounds/intro.ogg"></source>
        </audio>
      </Fragment>
    )
  }
}

export default Crawl
