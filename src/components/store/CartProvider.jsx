import ContextCart from "./context-Cart";

const CartProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return <ContextCart value={cartContext}>{props.children}</ContextCart>;
};

export default CartProvider;
