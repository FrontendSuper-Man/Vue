<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <LiItemComponent :link="links.header.link" classItem="header__item">
        <img :src="require(`@/assets/logo/${links.header.icon}`)" alt="logo" />
      </LiItemComponent>

      <LiItemComponent
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        classItem="header__item"
      />
    </ul>
  </header>
</template>

<script>
import LiItemComponent from "./LiItemComponent.vue";

export default {
  components: { LiItemComponent },
  computed: {
    links() {
      return this.$store.getters.getHeaderLinks;
    },
  },
};
</script>
