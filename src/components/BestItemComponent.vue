<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="require(`@/assets/img/${card.img}`)" alt="coffee" />
    <div class="best__item-title">{{ card.name }}</div>
    <div class="shop__item-country">Brazil</div>
    <div class="best__item-price">{{ card.price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
      required: false,
    },
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>
