import { usePages } from '../store/hooks';

export const Home = () => {
  const { setPage } = usePages();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://i.pinimg.com/originals/fc/f7/5f/fcf75f0ddaa240dbb18e623e4c371037.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-45"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={() => {
              setPage('pizzas');
            }}
            className="btn btn-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
