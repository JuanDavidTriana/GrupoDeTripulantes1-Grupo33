<template>
  <BasicLayouts>
    <Cards />
    <br />
    <br />
    <div>
      <div class="ui container">
        <h1>Calendario</h1>
        <datepicker
          lang="Greg"
          type="range"
          colorTheme="pink"
          v-model="dateGreg"
        />
      </div>
    </div>
    <br />
    <br />
    <Testimonios />
    <br />
    <br />
    <div>
      <h1>Últimos Productos</h1>
      <div class="ui grid">
        <div
          class="sixten wide mobile eight wide tablet four wide computer column"
          v-for="product in products"
          :key="product.id"
        >
          <Product :product="product" />
        </div>
      </div>
    </div>
  </BasicLayouts>
</template>

<script>
// @ is an alias to /src
import BasicLayouts from "../layouts/BasicLayouts.vue";
import Testimonios from "../components/Testimonios.vue";
import Cards from "../components/Cards.vue";
import { ref, onMounted } from "vue";
import { getProducts } from "../api/products";
import Product from "../components/Product.vue";
import datepicker from "vue-awesome-datepicker";

export default {
  name: "Home",
  components: {
    BasicLayouts,
    Testimonios,
    Cards,
    Product,
    datepicker,
  },

  setup() {
    let products = ref(null);
    onMounted(async () => {
      const response = await getProducts(30);
      products.value = response;
    });
    return {
      products,
    };
  },

  data() {
    return {
      date: {},
      dateGreg: {},
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Comfortaa", cursive;
}
.ui.container {
  text-align: center;
  color: #512d6d;
  position: center;
}
h1 {
  color: #512d6d;
}
</style>
