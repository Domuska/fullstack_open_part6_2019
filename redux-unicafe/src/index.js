import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const goodListener = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const neutralListener = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const badListener = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const zeroListener = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }


  return (
    <div>
      <button onClick={goodListener}>hyvä</button> 
      <button onClick={neutralListener}>neutraali</button> 
      <button onClick={badListener}>huono</button>
      <button onClick={zeroListener}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
