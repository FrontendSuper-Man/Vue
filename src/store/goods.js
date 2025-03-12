const goods = {
  state: {
    goods: [],
  },
  mutations: {
    setGoodsData(state, data) {
      /* eslint-disable no-param-reassign */
      state.goods = data;
      /* eslint-enable no-param-reassign */
    },
  },
  actions: {
    setGoodsData({ commit }, data) {
      commit("setGoodsData", data);
    },
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
    getGoodsById: (state) => (id) => {
      return state.goods.find((good) => good.id === id);
    },
  },
};

export default goods;
