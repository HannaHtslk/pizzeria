import { useAuth, usePages } from '../../store/hooks';

export const Header = () => {
  const { user, logout } = useAuth();
  const { setPage } = usePages();
  return (
    <div className=" px-2 py-2 bg-rose-50 text-rose-950 font-bold flex justify-between items-center text-4xl shadow-md">
      <h3>Pizzeria</h3>
      <p className="text-2xl">{user.email}</p>
      <div className="flex gap-4 text-2xl items-center">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('pizzas')}>Pizzas</button>
        <button onClick={() => setPage('cart')}>Cart</button>
        {user.email === 'admin@gmail.com' && user.password === 'admin' && (
          <button onClick={() => setPage('cart')}>Admin panel</button>
        )}
        <button className="btn " onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
