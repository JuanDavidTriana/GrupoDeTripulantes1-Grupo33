<template>
  <BasicLayouts>
    <h2>Aquí va el Home</h2>
    <Cards />
    <br />
    <br />
    <Testimonios />
  </BasicLayouts>
</template>

<script>
// @ is an alias to /src
import BasicLayouts from "../layouts/BasicLayouts.vue";
import Testimonios from "../components/Testimonios.vue";
import Cards from '../components/Cards.vue';
import {ref, onMounted} from 'vue';
import {getProducts} from '../api/products';

export default {
  name: "Home",
  components: {
    BasicLayouts,
    Testimonios,
    Cards,
  },

  setup(){
    let products = ref(null);
    onMounted(async ()=>{
      const response=await getProducts(30);
      products.value=response;
    });
    return{
      products,
    }
  }
};
</script>
