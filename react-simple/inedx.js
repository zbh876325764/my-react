import _React from './React/React'
import _ReactDOM from './React-dom/index'
const React = new _React()
const ReactDOM = new _ReactDOM()
const ele = (
  <div className='active' title='123'>
    hello,<span>react</span>
  </div>
)
console.log(ele);
ReactDOM.render(ele, document.querySelector('#root'))