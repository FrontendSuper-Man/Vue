<template>
  <li :class="classItem">
    <RouterLink :to="link">{{ text }} <slot></slot></RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
    link: {
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
