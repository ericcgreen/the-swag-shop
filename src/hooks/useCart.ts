import { useState } from 'react';
import { CartItemType } from '../types/cart-item';

const useCart = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const getTotalItems = (items: CartItemType[]): number => {
    return items.reduce((acc: number, item) => acc + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isAlreadyInCart = prev.find((item) => item.id === clickedItem.id);
      if (isAlreadyInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return acc;
          } else {
            return [...acc, { ...item, amount: item.amount - 1 }];
          }
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  return {
    toggleCart,
    setToggleCart,
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    getTotalItems,
  };
};

export default useCart;
