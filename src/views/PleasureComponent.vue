<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavbarComponent></NavbarComponent>
          </div>
        </div>
        <PageTitleComponent classItem="title-big" text="For your pleasure" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="./../assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="./../assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <BestItemComponent
                v-for="good in goods"
                :key="good.id"
                :name="good.name"
                :img="good.img"
                :price="good.price"
                classItem="shop__item"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import BestItemComponent from "../components/BestItemComponent.vue";
import PageTitleComponent from "../components/PageTitleComponent.vue";

export default {
  components: { NavbarComponent, BestItemComponent, PageTitleComponent },
  computed: {
    goods() {
      return this.$store.getters.getItem.goods;
    },
  },
};
</script>
