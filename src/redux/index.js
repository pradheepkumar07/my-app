import { Provider } from "react-redux";
/* import ReactReduxCounter from "./react-redux-couter";
import ReactReduxTodo from "./react-redux-todo"; */
/* import store from "./store"; */
import commerceStore from "./eCommerceStore";
import CartPage from "./CartPage";
import Products from "./Products";

const ReduxSample = () => {
    return(
        <div>
            <Provider store={commerceStore}>
            <CartPage/>
            <hr/>
            <Products/>
            </Provider>
        </div>
    );
}

export default ReduxSample;