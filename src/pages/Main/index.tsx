import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Products } from '../../agents';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { CartItemType } from '../../types/cart-item';

interface MainProps {
  toggleCart: boolean;
  setToggleCart: Dispatch<SetStateAction<boolean>>;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const ShopAll = ({ handleAddToCart, toggleCart, setToggleCart }: MainProps) => {
  const [products, setProducts] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getStoreProducts = async () => {
      try {
        const storeProducts = await Products.getProducts();
        setProducts(storeProducts);
        setLoading(false);
      } catch (err) {
        console.error('There was an error fetching the products', err);
        setLoading(false);
      }
    };
    getStoreProducts();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <section className="my-3 mx-auto grid max-w-screen-xl gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!loading && products && products.length
          ? products.map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  toggleCart={toggleCart}
                  setToggleCart={setToggleCart}
                  handleAddToCart={handleAddToCart}
                />
              );
            })
          : null}
      </section>
    </>
  );
};

export default ShopAll;
