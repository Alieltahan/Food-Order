import ContextCart from "./context-Cart";

const CartProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
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
