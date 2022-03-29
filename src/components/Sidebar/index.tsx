import { Dispatch, SetStateAction } from 'react';

interface SidebarProps {
  toggleCart: boolean;
  setToggleCart: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ toggleCart, setToggleCart }: SidebarProps) => {
  const className = `transition-transform duration-200 ease-in-out ${
    toggleCart ? 'translate-x-0' : 'translate-x-64'
  }`;
  return (
    <>
      <button
        type="button"
        onClick={() => setToggleCart(!toggleCart)}
        className={`absolute inset-0 h-screen w-screen bg-black/40 ${
          toggleCart ? 'block' : 'hidden'
        }`}
      >
        &nbsp;
      </button>
      <div
        className={`absolute top-0 right-0 h-screen w-60 border-l border-gray-200 bg-white ${className}`}
      >
        <div className="relative flex h-full w-full flex-col">
          <div className="relative w-full text-center">
            <button
              type="button"
              onClick={() => setToggleCart(!toggleCart)}
              className="relative flex w-full items-center bg-gray-200 p-3 text-sm"
            >
              Continue Shopping
            </button>
          </div>
          <div className="block flex-grow overflow-x-hidden px-4 pt-5 pb-0">
            Hello
          </div>
          <div className="h-11">
            <p>Subtotal (0) items $0.00</p>
            <button className="">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
