import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

import datas from '../utils/datas'

const images = [
  {id: 0, to: '/the-phantom-menace', src: require('../assets/images/the-phantom-menace.jpg')},
  {id: 1, to: '/attack-of-the-clones', src: require('../assets/images/attack-of-the-clones.jpg')},
  {id: 2, to: '/revenge-of-the-sith', src: require('../assets/images/revenge-of-the-sith.jpg')},
  {id: 3, to: '/a-new-hope', src: require('../assets/images/a-new-hope.jpg')},
  {id: 4, to: '/empire-strikes-back', src: require('../assets/images/empire-strikes-back.jpg')},
  {id: 5, to: '/return-of-the-jedi', src: require('../assets/images/return-of-the-jedi.jpg')},
  {id: 6, to: '/the-force-awakens', src: require('../assets/images/the-force-awakens.jpg')},
  {id: 7, to: '/the-last-jedi', src: require('../assets/images/the-last-jedi.jpg')},
  {id: 8, to: '/rise-of-skywalker', src: require('../assets/images/rise-of-skywalker.jpg')}
]

const Index = () => (
  <Fragment>
    <Nav />
    <div className="movies-list">
      {datas.map((m, i) => (
        <div className="movie" key={i}>
          <Link to={`/${m.slug}`}>
            <img src={require(`../assets/images/${m.image}`)} />
          </Link>
        </div>
      ))}
    </div>
  </Fragment>
)

export default Index
