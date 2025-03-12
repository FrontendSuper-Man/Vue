const coffee = {
  state: {
    coffees: [],
  },
  mutations: {
    setCoffeeData(state, data) {
      /* eslint-disable no-param-reassign */
      state.coffees = [...data];
      /* eslint-enable no-param-reassign */
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
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
