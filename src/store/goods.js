const goods = {
  state: {
    goods: [
      {
        id: "1",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: "2",
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
        img: "good-1.jpg",
      },
      {
        id: "3",
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
        img: "good-1.jpg",
      },
      {
        id: "4",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: "5",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: "6",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "good-1.jpg",
      },
    ],
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
