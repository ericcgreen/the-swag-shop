import { CartItemType } from '../../types/cart-item';

interface CardProps {
  product: CartItemType;
}

const Card = ({ product }: CardProps) => {
  const { category, description, id, image, price, rating, title, amount } =
    product;
  return (
    <article className="mx-auto w-full max-w-sm cursor-pointer overflow-hidden rounded-md border border-gray-100 shadow">
      <div
        className="relative mb-3 flex h-[404px] w-full items-end justify-end bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button className="absolute right-3 bottom-3 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
      </div>
      <div className="mb-3 h-11 px-1">
        <h3 className="text-sm text-gray-700">{title}</h3>
      </div>
      <p className="h-10 px-1">
        <span className="mt-2 text-sm text-gray-500">${price}</span>
      </p>
    </article>
  );
};

export default Card;
