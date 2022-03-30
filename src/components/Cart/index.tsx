import { Dispatch, SetStateAction } from 'react';
import { CartItemType } from '../../types/cart-item';
import Item from '../Item';

interface SidebarProps {
  toggleCart: boolean;
  setToggleCart: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
  getTotalItems: (items: CartItemType[]) => number;
}

const Sidebar = ({
  toggleCart,
  setToggleCart,
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
  getTotalItems,
}: SidebarProps) => {
  const className = `transition-transform duration-200 ease-in-out ${
    toggleCart ? 'translate-x-0' : 'translate-x-96'
  }`;
  const calcTotal = (items: CartItemType[]) => {
    return items.reduce(
      (acc: number, item) => acc + item.amount * item.price,
      0
    );
  };
  const totalItems = getTotalItems(cartItems);
  const totalPrice = calcTotal(cartItems).toFixed(2);
  return (
    <>
      <button
        type="button"
        onClick={() => setToggleCart(!toggleCart)}
        className={`fixed inset-0 h-screen w-screen bg-black/40 ${
          toggleCart ? 'block' : 'hidden'
        }`}
      >
        &nbsp;
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-80 border-l border-gray-200 bg-white ${className}`}
      >
        <div className="relative flex h-full w-full flex-col">
          <div className="relative w-full text-center">
            <button
              type="button"
              onClick={() => setToggleCart(!toggleCart)}
              className="relative flex w-full items-center gap-2 bg-gray-200 p-3 text-sm"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <div>Continue Shopping</div>
            </button>
          </div>
          <div className="block flex-grow overflow-x-hidden px-4 pt-5 pb-0">
            {cartItems && cartItems.length ? (
              cartItems.map((item) => {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                );
              })
            ) : (
              <p>There are no items in your cart.</p>
            )}
          </div>
          <div className="bg-gray-200 px-4 py-2">
            <div className="flex w-full justify-between">
              <div>
                <span className="text-lg text-gray-500">Subtotal</span>{' '}
                <span className="text-xs text-gray-400">
                  ({totalItems} items)
                </span>
              </div>
              <div>
                <span className="text-right">${totalPrice}</span>
              </div>
            </div>
            <button
              type="button"
              disabled={cartItems.length === 0}
              className="mt-2 h-11 w-full bg-black text-center font-bold uppercase text-white disabled:opacity-60"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
