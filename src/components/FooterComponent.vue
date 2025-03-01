<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
              <RouterLink :to="links[0].link">
                <img
                  :src="require(`@/assets/logo/${links[0].icon}`)"
                  alt="logo"
                />
              </RouterLink>
            </li>
            <!-- <li class="footer__item">
              <RouterLink :to="links[1].link"> {{ links[1].text }} </RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink :to="links[2].link"> {{ links[2].text }} </RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink :to="links[3].link"> {{ links[3].text }} </RouterLink>
            </li> -->

            <LiItemComponent
              :text="links[1].text"
              :link="links[1].link"
              classItem="footer__item"
            />
            <LiItemComponent
              :text="links[2].text"
              :link="links[2].link"
              classItem="footer__item"
            />
            <LiItemComponent
              :text="links[3].text"
              :link="links[3].link"
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
      links: [
        {
          id: 0,
          link: "/",
          icon: "Logo_black.svg",
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
