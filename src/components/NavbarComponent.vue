<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li class="header__item">
        <RouterLink :to="links[0].link">
          <img :src="require(`@/assets/logo/${links[0].icon}`)" alt="logo" />
        </RouterLink>
      </li>

      <!-- <li class="header__item">
        <RouterLink :to="links[1].link"> {{ links[1].text }} </RouterLink>
      </li>
      <li class="header__item">
        <RouterLink :to="links[2].link"> {{ links[2].text }} </RouterLink>
      </li>
      <li class="header__item">
        <RouterLink :to="links[3].link"> {{ links[3].text }} </RouterLink>
      </li> -->

      <LiItemComponent
        :text="links[1].text"
        :link="links[1].link"
        classItem="header__item"
      />
      <LiItemComponent
        :text="links[2].text"
        :link="links[2].link"
        classItem="header__item"
      />
      <LiItemComponent
        :text="links[3].text"
        :link="links[3].link"
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
      links: [
        {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
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
    };
  },
  components: { LiItemComponent },
};
</script>
