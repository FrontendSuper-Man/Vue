<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${img}`)" alt="coffee" />
    <div class="best__item-title">{{ name }}</div>
    <div class="shop__item-country">Brazil</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>
