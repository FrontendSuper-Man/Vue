const coffee = {
  state: {
    coffees: [],
    searchValue: "",
    sortValue: "",
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setCoffeeData(state, data) {
      state.coffees = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
    setSortValue(state, value) {
      state.sortValue = value;
    },
    /* eslint-enable no-param-reassign */
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
    setSearchValue({ commit }, value) {
      commit("setSearchValue", value);
    },
    setSortValue({ commit }, value) {
      commit("setSortValue", value);
      console.log(value);
    }
  },
  getters: {
    getCoffee(state) {
      return state.coffees.filter((item) =>
        (item.name || "").toLowerCase().includes(state.searchValue.toLowerCase())
      );
    },
    getProductsById: (state) => (id) => {
      return state.coffees.find((coffeeProduct) => coffeeProduct.id === id);
    },
    getSearchValue(state) {
      return state.searchValue;
    },
  },
};

export default coffee;
