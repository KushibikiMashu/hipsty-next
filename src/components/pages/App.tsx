import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../organisms/Header'
import Main from './Main'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactGA from 'react-ga'

export default function App() {
  ReactGA.initialize('UA-126057649-2')
  ReactGA.pageview(window.location.pathname + window.location.search)
  return (
    <React.Fragment>
      <Header />
      <Router basename="/">
        <Main />
      </Router>
    </React.Fragment>
  )
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'))
}
