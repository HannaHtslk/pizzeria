import { usePizza } from '../../store/hooks';
import { PizzaItem } from './PizzaItem';

export const PizzaList = () => {
  const { pizzas } = usePizza();

  return (
    <ul className="grid grid-cols-3 gap-4 max-w-6xl mx-auto py-8">
      {pizzas.map(pizza => {
        return <PizzaItem key={pizza.id} pizza={pizza} />;
      })}
    </ul>
  );
};
