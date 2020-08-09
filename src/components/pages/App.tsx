import React from 'react'
import Header from '../organisms/Header'
import Main from './Main'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Router basename="/">
        <Main />
      </Router>
    </React.Fragment>
  )
}
