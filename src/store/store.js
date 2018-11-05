import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import todoReducer from "../reducers/todo";
import persistState from "redux-localstorage";



export default function createStore(history) {
  return compose(persistState())(reduxCreateStore)(
    combineReducers({
      todo: todoReducer,
      router: routerReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
}




