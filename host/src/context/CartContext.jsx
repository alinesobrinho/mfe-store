import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext =
  createContext();

function CartProvider({
  children,
}) {
  const [cart, setCart] =
    useState([]);

  const addToCart = (
    product
  ) => {
    setCart((prevCart) => {
      const existingProduct =
        prevCart.find(
          (item) =>
            item.id ===
            product.id
        );

      if (existingProduct) {
        return prevCart.map(
          (item) =>
            item.id ===
            product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity +
                    1,
                }
              : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (
    productId
  ) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id ===
          productId
            ? {
                ...item,
                quantity:
                  item.quantity -
                  1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);

export {
  CartProvider,
  CartContext,
};