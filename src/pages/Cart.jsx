import { usePizza } from '../store/hooks';

export const Cart = () => {
  const { cart } = usePizza();
  return (
    <div>
      <ul className="grid gap-2 w-2/3 mx-auto">
        {cart.map(item => {
          return (
            <li
              className="bg-slate-200 items-center justify-between p-4 shadow-md rounded-md border-2 flex gap-4"
              key={item.id}
            >
              <img width={150} src={item.img} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <button className="btn btn-error">Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
