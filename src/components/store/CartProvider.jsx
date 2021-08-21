import ContextCart from "./context-Cart";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exitingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (exitingCartItem) {
      const updatedItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    cartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    cartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <ContextCart.Provider value={cartContext}>
      {props.children}
    </ContextCart.Provider>
  );
};

export default CartProvider;
