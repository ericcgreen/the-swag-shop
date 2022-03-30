import { CartItemType } from '../../types/cart-item';

interface ItemProps {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
}

const Item = ({ item, handleAddToCart, handleRemoveFromCart }: ItemProps) => {
  const total = (item.amount * item.price).toFixed(2);
  return (
    <div className="flex min-h-[80px] px-2 py-4">
      <img
        src={item.image}
        alt={item.title}
        className="block"
        height="80"
        width="50"
      />
      <div className="flex w-full flex-col pl-4">
        <h3 className="flex-1 text-sm text-black">{item.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end gap-x-2">
            <button
              type="button"
              className="flex h-4 w-4 items-center justify-center bg-gray-200 text-sm text-black hover:bg-gray-300"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              -
            </button>
            <div className="min-w-[16px] text-center text-sm">
              {item.amount}
            </div>
            <button
              type="button"
              className="flex h-4 w-4 items-center justify-center bg-gray-200 text-sm text-black hover:bg-gray-300"
              onClick={() => handleAddToCart(item)}
            >
              +
            </button>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Total: ${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
