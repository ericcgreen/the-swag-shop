import { useState, useEffect } from 'react';
import { Products } from '../../agents';
import Card from '../../components/Card';
import { CartItemType } from '../../types/cart-item';

const ShopAll = () => {
  const [products, setProducts] = useState<CartItemType[]>([]);

  useEffect(() => {
    const getStoreProducts = async () => {
      try {
        const storeProducts = await Products.getProducts();
        setProducts(storeProducts);
      } catch (err) {
        console.error('There was an error fetching the products', err);
      }
    };
    getStoreProducts();
  }, []);

  return (
    <section className="my-3 mx-auto grid max-w-screen-xl gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products && products.length
        ? products.map((product) => {
            return <Card key={product.id} product={product} />;
          })
        : null}
    </section>
  );
};

export default ShopAll;
