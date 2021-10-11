<template>
  <BasicLayouts>
    <div class="ui container">
      <h1 class="ui title">Acerca de nosotros</h1>
      <br />
      <div class="ui grid">
        <div class="four wide column">
          <img src="../assets/Perano.png" class="avatar" />
          <h3>Geraldin Cordero</h3>
          <p>Ingeniera Electromecánica</p>
          <p>Tripulante MisiónTIC 2022 - UTP</p>
        </div>
        <div class="four wide column">
          <img src="../assets/Perano.png" class="avatar" />
          <h3>Juan Gómez</h3>
          <p>Biólogo - UdeA</p>
          <p>Tripulante MisiónTIC 2022 - UTP</p>
        </div>
        <div class="four wide column">
          <img src="../assets/Perano.png" class="avatar" />
          <h3>Isabel Marulanda</h3>
          <p>Estudiante Ing. Biológica - UNAL</p>
          <p>Tripulante MisiónTIC 2022 - UTP</p>
        </div>
        <div class="four wide column">
          <img src="../assets/Perano.png" class="avatar" />
          <h3>Marcela Montes</h3>
          <p>Tripulante MisiónTIC 2022 - UTP</p>
        </div>
        <div class="four wide column">
          <img src="../assets/Perano.png" class="avatar" />
          <h3>Raymond Tabares</h3>
          <p>Ing. Electricista - UdeA</p>
          <p>Tripulante MisiónTIC 2022 - UTP</p>
        </div>
      </div>
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
.avatar {
  width: 200px;
}
</style>