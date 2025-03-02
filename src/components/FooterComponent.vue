<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <LiItemComponent :link="links.header.link" classItem="header__item">
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                alt="logo"
              />
            </LiItemComponent>
            <LiItemComponent
              v-for="link in links.other"
              :key="link.id"
              :link="link.link"
              :text="link.text"
              classItem="footer__item"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
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
          icon: "Logo_black.svg",
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
