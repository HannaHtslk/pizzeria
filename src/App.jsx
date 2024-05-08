import { Login } from './components/Login/Login';
import { Home } from './pages/Home';
import { useAuth, usePages } from './store/hooks';

const App = () => {
  const { page } = usePages();
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Login />;
  }
  return <div>{page === 'home' && <Home />}</div>;
};

export default App;
