import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      // Increase Quantity if a already in cart
      const updatedCart = cartItem.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updatedCart);
      toast.success("Product quantity is increased!");
    } else {
      // add new item with quantity 1
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
      toast.success("Product is added to card:");
    }
  };

  const updateQauntity = (cartItem, productId, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
              toast.success("Quantity is increased Successfully");
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
              toast.success("Quantity is increased Successfully");
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null) //remove item quatity 0
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id != productId));
    toast.success("Product is deleted from the cart");
  };

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQauntity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

// creating custom hook
export const useCart = () => useContext(CartContext);
