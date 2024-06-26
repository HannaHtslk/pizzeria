import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Pizzas } from './pages/Pizzas';
import Checkout from './store/Checkout/Checkout';
import { useAuth, usePages } from './store/hooks';

const App = () => {
  const { page } = usePages();
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Login />;
  }
  return (
    <div>
      <Header />
      {page === 'home' && <Home />}
      {page === 'pizzas' && <Pizzas />}
      {page === 'cart' && <Cart />}
      {page === 'checkout' && <Checkout />}
    </div>
  );
};

export default App;
