'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

const container = document.createElement('div')
container.id = 'app'
document.body.style.margin = 0;
document.body.appendChild(container)

ReactDOM.render(<div>foo</div>, container)
