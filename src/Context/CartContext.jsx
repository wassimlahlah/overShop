import { createContext, useState } from "react";
import { getProductById } from "../data/products";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addToCart(productId) {
    setCartItem((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === productId
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { id: productId, quantity: 1 }];
    });
  }

  function getCartItemWithProduct() {
    return cartItem
      .map((item) => ({
        ...item,
        product: getProductById(item.id),
      }))
      .filter((item) => item.product);
  }

  function removeFromCart(productId) {
    setCartItem((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }

  function getTotal() {
    return cartItem.reduce((total, item) => {
      const product = getProductById(item.id);
      return (
        total +
        (product
          ? product.price * item.quantity
          : 0)
      );
    }, 0);
  }

  function clearCart() {
    setCartItem([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        getCartItemWithProduct,
        getTotal,
        clearCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}