import { usePizza } from '../../store/hooks';

export const PizzaItem = ({ pizza }) => {
  const { addToCart } = usePizza();
  return (
    <li className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={pizza.img} alt={pizza.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{pizza.title}</h2>
        <p>Price: {pizza.price}</p>
        <p>Wight: {pizza.weight}</p>
        <p>Size: {pizza.size}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => {
              addToCart(pizza);
            }}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};
