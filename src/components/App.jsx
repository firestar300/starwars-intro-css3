import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import datas from '../utils/datas'

import Index from './Index'
import Crawl from './Crawl'

const App = () => (
  <Router basename={`starwars`}>
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      {datas.map((m, i) => (
        <Route key={i} path={`/${m.slug}`}>
          <Crawl movie={m} />
        </Route>
      ))}
    </Switch>
  </Router>
)

export default App
