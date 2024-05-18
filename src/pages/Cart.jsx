import EmptyCart from '../components/EmptyCart/EmptyCart';
import { usePages, usePizza } from '../store/hooks';

export const Cart = () => {
  const {
    cart,
    totalSum,
    increaseQty,
    decreaseQty,
    resetCart,
    deleteFromCart,
  } = usePizza();

  const { setPage } = usePages();
  if (!cart.length) {
    return <EmptyCart />;
  }
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
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item)}
                  className="btn btn-primary"
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => increaseQty(item)}
                  className="btn btn-primary"
                >
                  +
                </button>
              </div>
              <p>
                {item.price} x {item.quantity}
              </p>
              <p>{item.price * item.quantity}uah</p>

              <button
                onClick={() => deleteFromCart(item)}
                className="btn btn-error"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex  flex-col">
        <p>Total: {totalSum}</p>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setPage('checkout');
            }}
            className="btn btn-info"
          >
            Place an order
          </button>
          <button onClick={resetCart} className="btn btn-error">
            Empty cart
          </button>
        </div>
      </div>
    </div>
  );
};
