<template>
  <BasicLayouts>
    <div class="ui container">
      <h1 class="ui title">Acerca de nosotros</h1>
      <br />
      <h3>Geraldin Cordero</h3>
      <p>Ingeniera Electromecánica</p>
      <p>Tripulantes MisiónTIC 2022 - UTP</p>
      <br />
      <h3>Juan Gómez</h3>
      <p>Biólogo - UdeA</p>
      <p>Tripulantes MisiónTIC 2022 - UTP</p>
      <br />
      <h3>Isabel Marulanda</h3>
      <p>Estudiante Ing. Biológica - UNAL</p>
      <p>Tripulantes MisiónTIC 2022 - UTP</p>
      <br />
      <h3>Marcela Montes</h3>
      <p>Tripulantes MisiónTIC 2022 - UTP</p>
      <br />
      <h3>Raymond Tabares</h3>
      <p>Ing. Electricista - UdeA</p>
      <p>Tripulantes MisiónTIC 2022 - UTP</p>
      <br />
    </div>
  </BasicLayouts>
</template>

<script>
import BasicLayouts from "../layouts/BasicLayouts.vue";

export default {
  name: "AboutUs",
  components: {
    BasicLayouts,
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Comfortaa", cursive;
}
.ui.title {
  text-align: center;
}
</style>