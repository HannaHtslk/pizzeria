import { useEffect } from 'react';
import { fetchPizzas } from '../services/api';
import { usePizza } from '../store/hooks';
import { PizzaList } from '../components/PizzaComponents/PizzaList';

export const Pizzas = () => {
  const { setPizzas } = usePizza();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPizzas();

      setPizzas(data);
    };
    getData();
  }, [setPizzas]);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://i.pinimg.com/originals/fc/f7/5f/fcf75f0ddaa240dbb18e623e4c371037.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-45"></div>
      <div>
        <PizzaList />
      </div>
    </div>
  );
};
