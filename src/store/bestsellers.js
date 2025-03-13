const bestSellers = {
  state: {
    bestsellers: [
      {
        id: "1",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "coffee-1.jpg",
      },
      {
        id: "2",
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
        img: "coffee-2.jpg",
      },
      {
        id: "3",
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
        img: "coffee-3.jpg",
      },
    ],
  },
  getters: {
    getBestSellers(state) {
      return state.bestsellers;
    },
    getSellersById: (state) => (id) => {
      return state.bestsellers.find((seller) => seller.id === id);
    },
  },
};

export default bestSellers;
