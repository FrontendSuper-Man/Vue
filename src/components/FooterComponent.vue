<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <LiItemComponent :link="links.footer.link" classItem="footer__item">
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
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
  computed: {
    links() {
      return this.$store.getters.getFooterLinks;
    },
  },
  components: { LiItemComponent },
};
</script>
