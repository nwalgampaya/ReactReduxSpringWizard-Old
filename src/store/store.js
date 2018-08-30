import { createStore, applyMiddleware } from "redux";
// import books from "../reducers/books";
import thunk from "redux-thunk";
import persons from "../reducers/persons";

export default () => {
  // return createStore(books, applyMiddleware(thunk));
  return createStore(persons, applyMiddleware(thunk));
};
