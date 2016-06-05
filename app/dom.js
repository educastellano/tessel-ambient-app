import React        from 'react'
import ReactDOM     from 'react-dom'
import App          from './app'
import css          from './app.styl'

let container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

let style = document.createElement('style')
style.innerHTML = css
document.head.appendChild(style)

ReactDOM.render(<App />, container)