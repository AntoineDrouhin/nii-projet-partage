import React from 'react'
import { render } from 'react-dom'
import HelloWorld from './HelloWorld.component.js'


render(
  <HelloWorld name="World" />,
  document.getElementById('root')
)
