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
  data() {
    return {
      links: {
        header: {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: 1,
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: 2,
            text: "For your pleasure",
            link: "/goodspage",
          },
          {
            id: 3,
            text: "Contact us",
            link: "/contacts",
          },
        ],
      },
    };
  },
  components: { LiItemComponent },
};
</script>
