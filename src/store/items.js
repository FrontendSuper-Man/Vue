import { v4 as uuidv4 } from "uuid";

const items = {
  state: {
    bestsellers: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "coffee-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
        img: "coffee-2.jpg",
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
        img: "coffee-3.jpg",
      },
    ],
    goods: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
        img: "good-1.jpg",
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
        img: "good-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "good-1.jpg",
      },
    ],
    coffees: [
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        img: "coffee-1.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Presto Coffee Beans 1kg",
        img: "coffee-2.jpg",
        price: 15.99,
      },
      {
        id: uuidv4(),
        name: "AROMISTICO Coffee 1kg",
        img: "coffee-3.jpg",
        price: 6.99,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        img: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        img: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        name: "Solimo Coffee Beans 2kg",
        img: "coffee-3.jpg",
        price: 10.73,
      },
    ],
  },
  getters: {
    getItem(state) {
      return {
        bestsellers: state.bestsellers,
        goods: state.goods,
        coffees: state.coffees,
      };
    },
  },
};

export default items;
