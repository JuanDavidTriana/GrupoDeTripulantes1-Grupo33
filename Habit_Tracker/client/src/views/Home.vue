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

export default {
  name: "Home",
  components: {
    BasicLayouts,
    Testimonios,
    Cards,
  },
};
</script>
