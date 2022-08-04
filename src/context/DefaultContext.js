import { createContext, useContext, useState, useEffect } from 'react';
const DefaultContext = createContext();

const DefaultProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [products, setProducts] = useState([
    {
      name: "Dallchini Rolls glazed and toasted",
      image:
        'https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg',
      description: "These rolls are just your perfect snack with the evening coffee!!",
      price: '12',
      id: '1',
    },
    {
      name: "Dallchini Rolls glazed and toasted",
      image:
        'https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg',
      description: "These rolls are just your perfect snack with the evening coffee!!",
      price: '12',
      id: '2',
    },
    {
      name: "Dallchini Rolls glazed and toasted",
      image:
        'https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg',
      description: "These rolls are just your perfect snack with the evening coffee!!",
      price: '12',
      id: '3',
    },
    {
      name: "Dallchini Rolls glazed and toasted",
      image:
        'https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg',
      description: "These rolls are just your perfect snack with the evening coffee!!",
      price: '12',
      id: '4',
    },
    {
      name: "Dallchini Rolls glazed and toasted",
      image:
        'https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg',
      description: "These rolls are just your perfect snack with the evening coffee!!",
      price: '12',
      id: '5',
    },
    {
      name: "Dallchini Rolls glazed and toasted",
      image:
        'https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg',
      description: "These rolls are just your perfect snack with the evening coffee!!",
      price: '12',
      id: '6',
    },
    {
      name: "Dallchini Rolls glazed and toasted",
      image:
        'https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg',
      description: "These rolls are just your perfect snack with the evening coffee!!",
      price: '12',
      id: '7',
    },
  ]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  useEffect(() => {
    if (user.length !== 0) {
      localStorage.setItem('user', user);
    }
  }, [user]);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <DefaultContext.Provider
      value={{ user, setUser, products, setProducts, cart, setCart }}
    >
      {children}
    </DefaultContext.Provider>
  );
};

export const DefaultState = () => {
  return useContext(DefaultContext);
};

export default DefaultProvider;
