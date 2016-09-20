'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.jsx'

document.body.style.margin = 0;

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

ReactDOM.render(<App />, container)
