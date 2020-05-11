import React from 'react'
import { Link } from 'react-router-dom'

import datas from '../utils/datas'

const Nav = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li>
          <Link to="/" className="active">Star Wars Crawl Text in CSS3</Link>
        </li>
        {datas.map((m, i) => (
          <li key={i}>
            <Link to={`/${m.slug}`}>{m.episode}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">
          By <a href="https://github.com/firestar300" target="_blank">Milan Ricoul</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Nav
