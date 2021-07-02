import { getAllProductsReducer, getProductByIdReducer, addProductReviewReducer, deleteProductReducer, addProductReducer, updateProductReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerNewUserReducer, loginReducer, updateReducer, getAllUsersReducer, deleteUserReducer } from './reducers/userReducer'
import { placeOrderReducer, getOrdersByUserIdReducer, getOrderByIdReducer, getAllOrdersReducer } from './reducers/orderReducer';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  placeOrderReducer: placeOrderReducer,
  getOrdersByUserIdReducer: getOrdersByUserIdReducer,
  getOrderByIdReducer: getOrderByIdReducer,
  addProductReviewReducer: addProductReviewReducer,
  updateReducer: updateReducer,
  getAllUsersReducer: getAllUsersReducer,
  deleteUserReducer: deleteUserReducer,
  deleteProductReducer: deleteProductReducer,
  addProductReducer: addProductReducer,
  updateProductReducer: updateProductReducer,
  getAllOrdersReducer: getAllOrdersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
  cartReducer: { cartItems: cartItems },
  loginReducer: { currentUser: currentUser }
}

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(finalReducer, initialState, composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
));

export default store