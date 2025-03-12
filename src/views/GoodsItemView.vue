<template>
  <main>
    <div
      class="banner"
      :class="
        pageName === 'coffee'
          ? 'coffepage-banner'
          : pageName === 'hero'
            ? 'preview'
            : 'goodspage-banner'
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavbarComponent></NavbarComponent>
          </div>
        </div>
        <h1 class="title-big" v-if="product">{{ product.name }}</h1>
      </div>
    </div>

    <section class="shop" v-if="product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img class="shop__girl" :src="product.img" alt="coffee_item" />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="../assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point">
              <span>Country: {{ product.country }}</span>
              Brazil
            </div>
            <div class="shop__point">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent,
  },
  data() {
    return {
      product: null,
    };
  },
  computed: {
    pageName() {
      console.log(this.$route.name);
      return this.$route.name;
    },
    card() {
      const getPageGetter = () => {
        if (this.pageName === "coffee") return "getProductsById";
        if (this.pageName === "bestsellers") return "getSellersById";
        if (this.pageName === "goods") return "getGoodsById";
        return null;
      };
      const pageGetter = getPageGetter();
      return this.$store.getters[
        pageGetter !== null ? pageGetter : "getSellersById"
      ](this.$route.params.id);
    },
  },
  destroyed() {
    this.product = null;
  },
  mounted() {
    fetch(`http://localhost:3000/${this.pageName}/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.product = data;
      });
  },
};
</script>
