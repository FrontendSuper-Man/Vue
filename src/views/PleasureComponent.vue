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
                classItem="shop__item"
                :name="goods[0].name"
                :img="goods[0].img"
                :price="goods[0].price"
              />
              <BestItemComponent
                classItem="shop__item"
                :name="goods[1].name"
                :img="goods[1].img"
                :price="goods[1].price"
              />
              <BestItemComponent
                classItem="shop__item"
                :name="goods[2].name"
                :img="goods[2].img"
                :price="goods[2].price"
              />
              <BestItemComponent
                classItem="shop__item"
                :name="goods[3].name"
                :img="goods[3].img"
                :price="goods[3].price"
              />
              <BestItemComponent
                classItem="shop__item"
                :name="goods[4].name"
                :img="goods[4].img"
                :price="goods[4].price"
              />
              <BestItemComponent
                classItem="shop__item"
                :name="goods[5].name"
                :img="goods[5].img"
                :price="goods[5].price"
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
  data() {
    return {
      goods: [
        {
          id: 0,
          name: "Solimo Coffee Beans 2kg",
          price: "10.73$",
          img: "good-1.jpg",
          country: "Brazil",
        },
        {
          id: 1,
          name: "Presto Coffee Beans 1kg",
          price: "15.99$",
          img: "good-1.jpg",
          country: "Brazil",
        },
        {
          id: 2,
          name: "AROMISTICO Coffee 1kg",
          price: "6.99$",
          img: "good-1.jpg",
          country: "Brazil",
        },
        {
          id: 3,
          name: "Solimo Coffee Beans 2kg",
          price: "10.73$",
          img: "good-1.jpg",
          country: "Brazil",
        },
        {
          id: 4,
          name: "Solimo Coffee Beans 2kg",
          price: "10.73$",
          img: "good-1.jpg",
          country: "Brazil",
        },
        {
          id: 5,
          name: "Solimo Coffee Beans 2kg",
          price: "10.73$",
          img: "good-1.jpg",
          country: "Brazil",
        },
      ],
    };
  },
  components: { NavbarComponent, BestItemComponent, PageTitleComponent },
};
</script>
