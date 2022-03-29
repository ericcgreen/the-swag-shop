import Footer from './components/Footer.js';
import Navigation from './components/Navigation';
import Main from './pages/Main';

const App = () => {
  return (
    <div className="store">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
