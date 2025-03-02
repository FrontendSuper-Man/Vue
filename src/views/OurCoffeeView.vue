<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavbarComponent></NavbarComponent>
          </div>
        </div>
        <PageTitleComponent classItem="title-big" text="Our Coffee" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="./../assets/img/coffee_girl.jpg"
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <BestItemComponent
                v-for="bestCoffee in coffees"
                :key="bestCoffee.id"
                :name="bestCoffee.name"
                :img="bestCoffee.img"
                :price="bestCoffee.price"
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
import { v4 as uuidv4 } from "uuid";
import NavbarComponent from "../components/NavbarComponent.vue";
import BestItemComponent from "../components/BestItemComponent.vue";
import PageTitleComponent from "../components/PageTitleComponent.vue";

export default {
  data() {
    return {
      coffees: [
        {
          id: uuidv4(),
          name: "Solimo Coffee Beans 2kg",
          img: "coffee-1.jpg",
          price: "10.73$",
        },
        {
          id: uuidv4(),
          name: "Presto Coffee Beans 1kg",
          img: "coffee-2.jpg",
          price: "15.99$",
        },
        {
          id: uuidv4(),
          name: "AROMISTICO Coffee 1kg",
          img: "coffee-3.jpg",
          price: "6.99$",
        },
        {
          id: uuidv4(),
          name: "Solimo Coffee Beans 2kg",
          img: "coffee-3.jpg",
          price: "10.73$",
        },
        {
          id: uuidv4(),
          name: "Solimo Coffee Beans 2kg",
          img: "coffee-3.jpg",
          price: "10.73$",
        },
        {
          id: uuidv4(),
          name: "Solimo Coffee Beans 2kg",
          img: "coffee-3.jpg",
          price: "10.73$",
        },
      ],
    };
  },
  components: { NavbarComponent, BestItemComponent, PageTitleComponent },
};
</script>
