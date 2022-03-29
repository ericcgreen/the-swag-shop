import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Main from './pages/Main';
import useNavigation from './hooks/useNavigation';
import Sidebar from './components/Sidebar';

const App = () => {
  const { toggleCart, setToggleCart } = useNavigation();
  return (
    <div className="store relative">
      <Navigation toggleCart={toggleCart} setToggleCart={setToggleCart} />
      <Main />
      <Sidebar toggleCart={toggleCart} setToggleCart={setToggleCart} />
      <Footer />
    </div>
  );
};

export default App;
