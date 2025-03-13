const coffee = {
  state: {
    coffees: [
      {
        id: "1",
        name: "Solimo Coffee Beans 2kg",
        img: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: "2",
        name: "Presto Coffee Beans 1kg",
        img: "coffee-3.jpg",
        price: 15.99,
      },
      {
        id: "3",
        name: "AROMISTICO Coffee 1kg",
        img: "coffee-3.jpg",
        price: 6.99,
      },
      {
        id: "4",
        name: "Solimo Coffee Beans 2kg",
        img: "coffee-3.jpg",
        price: 10.73,
      },
      {
        id: "5",
        name: "Presto Coffee Beans 1kg",
        img: "coffee-3.jpg",
        price: 15.99,
      },
      {
        id: "6",
        name: "AROMISTICO Coffee 1kg",
        img: "coffee-3.jpg",
        price: 6.99,
      },
    ],
  },
  getters: {
    getCoffee(state) {
      return state.coffees;
    },
    getProductsById: (state) => (id) => {
      return state.coffees.find((coffeeProduct) => coffeeProduct.id === id);
    },
  },
};

export default coffee;
