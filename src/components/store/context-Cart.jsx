import React from "react";

const ContextCart = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default ContextCart;
