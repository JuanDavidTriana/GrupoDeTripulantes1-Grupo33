<template>
  <BasicLayouts>
    <Cards />
    <br />
    <br />
    <Testimonios />
    <br />
    <br />
    <div>
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

export default {
  name: "Home",
  components: {
    BasicLayouts,
    Testimonios,
    Cards,
    Product,
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
};
</script>