import { Provider } from "react-redux";
import ReactReduxCounter from "./react-redux-couter";
import ReactReduxTodo from "./react-redux-todo";
import store from "./store";
import commerceStore from "./eCommerceStore";
import CartPage from "./commercePage";
import Products from "./Products";
import Wishlist from "./wishListPage";

const ReduxSample = () => {
  return (
    <div>
      <Provider store={commerceStore}>
        <CartPage />
        <hr />
        <Products />
        <hr />
        <Wishlist />
      </Provider>
      <hr />
      <Provider store={store}>
        <ReactReduxCounter />
        <ReactReduxTodo />
      </Provider>
    </div>
  )
}

export default ReduxSample;