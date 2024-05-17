import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = pizza => {
    setCart(prev => [...prev, { ...pizza, quantity: 1 }]);
    toast.success('Pizza was added to your cart');
  };

  const deleteFromCart = pizza => {
    setCart(prev => prev.filter(item => item.id !== pizza.id));
    toast.info('Pizza was removed');
  };
  const contextValue = {
    pizzas,
    setPizzas,
    cart,
    addToCart,
    deleteFromCart,
  };
  return (
    <PizzaContext.Provider value={contextValue}>
      {children}
    </PizzaContext.Provider>
  );
};
