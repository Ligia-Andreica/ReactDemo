import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './rootReducer'

const middlewares = [thunk, createLogger()]

const initialState = undefined
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
)
export default store

/* //Custom Logger
function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

let store = createStore(reducers, applyMiddleware(logger))*/
