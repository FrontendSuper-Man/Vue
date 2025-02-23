<template>
  <div class="wrapper">
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: { FooterComponent },
};
</script>

<style></style>
