import axios from 'axios';

export const fetchPizzas = async () => {
  const { data } = await axios.get('http://localhost:1999/pizzas');

  return data;
};
