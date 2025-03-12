const bestSellers = {
  state: {
    bestsellers: [],
  },
  mutations: {
    setSellersData(state, data) {
      /* eslint-disable no-param-reassign */
      state.bestsellers = data;
      /* eslint-enable no-param-reassign */
    },
  },
  actions: {
    setSellersData({ commit }, data) {
      commit("setSellersData", data);
    },
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
