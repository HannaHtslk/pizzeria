import { Field, Form, Formik } from 'formik';
import { useAuth, usePages, usePizza } from '../hooks';
import moment from 'moment';
import { checkout } from '../../services/api';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cart, resetCart } = usePizza();
  const { user } = useAuth();
  const { setPage } = usePages();
  const initialValues = {
    name: '',
    email: user.email,
    phone: '',
    address: '',
    summary: '',
    check: false,
  };

  const handleSubmit = values => {
    checkout({
      ...values,
      cart,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      status: 'waiting',
    }).then(
      () => toast.success('Thanks for placing an order!'),
      resetCart(),
      setTimeout(() => {
        setPage('pizzas');
      }, 2000)
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-10">
      <div className="flex flex-col justify-center gap-4 border-4 shadow-lg p-4">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="flex flex-col p-4 gap-4">
            <Field
              name="name"
              placeholder="Enter your name"
              className="input border-2 border-black"
            />
            <Field
              name="email"
              placeholder="Enter your email"
              className="input border-2 border-black"
            />
            <Field
              name="phone"
              placeholder="Enter your phone"
              className="input border-2 border-black"
            />
            <Field
              name="address"
              placeholder="Enter your address"
              className="input border-2 border-black"
            />
            <Field
              as="textarea"
              name="summary"
              placeholder="Enter your summary"
              className="input border-2 border-black"
            />
            <div>
              <Field name="check" type="checkbox" /> I submit the order
            </div>

            <button className="btn btn-success" type="submit">
              Place an order
            </button>
            <button
              type="button"
              onClick={() => setPage('cart')}
              className="btn btn-primary"
            >
              Back to cart
            </button>
          </Form>
        </Formik>
      </div>
      <div className="flex flex-col  gap-4 border-4 shadow-lg p-4">
        {cart.map(item => (
          <li className="list-none flex justify-between" key={item.id}>
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            <p> {item.price}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
