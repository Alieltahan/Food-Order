import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Cart />
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
