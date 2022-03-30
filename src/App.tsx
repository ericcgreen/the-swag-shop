import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Main from './pages/Main';
import useCart from './hooks/useCart';
import Cart from './components/Cart';

const App = () => {
  const {
    toggleCart,
    setToggleCart,
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    getTotalItems,
  } = useCart();
  const numberOfItems = getTotalItems(cartItems);
  return (
    <div className="store relative">
      <Navigation
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
        items={numberOfItems}
      />
      <Main
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
        handleAddToCart={handleAddToCart}
      />
      <Cart
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        getTotalItems={getTotalItems}
      />
      <Footer />
    </div>
  );
};

export default App;
