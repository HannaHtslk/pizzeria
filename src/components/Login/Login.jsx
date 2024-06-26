import { Field, Form, Formik } from 'formik';
import { useAuth } from '../../store/hooks';

export const Login = () => {
  const { login } = useAuth();
  const initialValues = {
    email: 'admin@gmail.com',
    password: 'admin',
  };

  const handleSubmit = values => {
    return login(values);

    // if (values.email === 'admin@gmail.com' && values.password === 'admin') {
    //   login(values);
    //   toast.success('Welcome admin!');
    //   return;
    // }
    // toast.error('Invalid data!');
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            vitae eveniet voluptas, sapiente debitis sequi enim consequuntur
            accusantium distinctio accusamus architecto blanditiis officia cum
            delectus fuga hic veniam, beatae deserunt.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
