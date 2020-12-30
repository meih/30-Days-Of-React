import React from 'react'
import ReactDOM from 'react-dom'
import techImage from './images/frontend_technologies.png'

const header = (
  <header>
    <h1>Subscribe</h1>
    <h2>Sign up with your email address to receive news and updates</h2>
  </header>
)

const form = (
  <div className="main">
    <div className="info">
      <input type="text" placeholder="email"></input>
      <input type="text" placeholder="firstname"></input>
      <input type="text" placeholder="lastname"></input>
    </div>
    <div className="button">
      <button>Submit</button>
    </div>
  </div>
)

const footer = (
  <div>
    <p>Powered by: </p>
    <img src={techImage} alt='tree' />
  </div>
)

const app = (
  <div className='app'>
    {header}
    {form}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)
