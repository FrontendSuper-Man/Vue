export default {
  methods: {
    navigate(id) {
      this.$router.push({
        name: this.name,
        params: {
          id,
        },
      });
    },
  },
};
