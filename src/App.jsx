import { Login } from './components/Login/Login';
import { Home } from './pages/Home';
import { Pizzas } from './pages/Pizzas';
import { useAuth, usePages } from './store/hooks';

const App = () => {
  const { page } = usePages();
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Login />;
  }
  return (
    <div>
      {page === 'home' && <Home />}
      {page === 'pizzas' && <Pizzas />}
    </div>
  );
};

export default App;
