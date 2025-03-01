<template>
  <div :class="classItem">{{ text }}</div>
</template>

<script>
export default {
  props: {
    classItem: String,
    text: String,
  },
};
</script>
