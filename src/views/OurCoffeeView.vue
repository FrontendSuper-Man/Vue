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
            <img class="shop__girl" src="./../assets/img/coffee_girl.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="./../assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
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
              <input id="filter" type="text" placeholder="start typing here..." class="shop__search-input"
                v-model="searchValue" />
              {{ searchValue }}
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <button class="shop__filter-btn" @click="onSort('reset')"
                style="width: 90px; height: 60px; align-self: center;">Reset filters</button>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">Brazil</button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">Kenya</button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <BestItemComponent v-for="bestCoffee in coffees" :key="bestCoffee.id" :card="bestCoffee"
                classItem="shop__item" @onNavigate="navigate" />
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
import navigateMixin from "../mixins/navigate";

export default {
  components: { NavbarComponent, BestItemComponent, PageTitleComponent },
  mixins: [navigateMixin],
  data() {
    return {
      name: "coffee",
    };
  },
  mounted() {
    fetch("http://localhost:3000/coffee")
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("setCoffeeData", data);
      });
  },
  computed: {
    coffees() {
      return this.$store.getters.getCoffee;
    },
    searchValue: {
      set(value) {
        this.$store.dispatch("setSearchValue", value);
      },
      get() {
        return this.$store.getters.getSearchValue;
      },
    },
  },
  methods: {
    onSearch(event) {
      this.$store.dispatch("setSearchValue", event.target.value);
    },
    async onSort(value) {
      const url = value === "reset"
        ? "http://localhost:3000/coffee"
        : `http://localhost:3000/coffee?country=${value}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.$store.dispatch("setCoffeeData", data);
        if (value === "reset") {
          this.$store.dispatch("setSearchValue", "");
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    },
  },
};
</script>
