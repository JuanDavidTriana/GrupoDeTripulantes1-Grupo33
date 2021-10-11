<template>
  <div class="ui segment">
    <h1 class="ui header">¿Qué es Habit Tracker?</h1>
    <p>
      Es una aplicación que te ayudará de  forma simple a medir tus  hábitos a adquirir. 
      Además puedes encontrar productos que te ayudaran a programarte en este proceso.
    </p>
  </div>
  <br />

  <div class="ui grid">
    <div class="ui three cards">
      <div class="ui card">
        <div class="content">
          <div class="ui medium image">
            <img src="../assets/Porque1.jpg" />
          </div>
          <div class="content">
            <h2 class="ui header">¿Por qué adquirir hábitos?</h2>
            <br />
          </div>
          <router-link to="/Blog">
            <button class="ui inverted violet button">Ver</button>
          </router-link>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <div class="ui medium image">
            <img src="../assets/calendario.jpg" />
          </div>
          <div class="content">
            <h2 class="ui header">¿Cómo crear hábitos?</h2>
            <br />
          </div>
          <router-link to="/Blog">
            <button class="ui inverted violet button">Ver</button>
          </router-link>
        </div>
      </div>

      <div class="ui card">
        <div class="content">
          <div class="ui medium image">
            <img src="../assets/meta.jpg" />
          </div>
          <div class="content">
            <h2 class="ui header">¿Cómo establecer Metas?</h2>
            <br />
          </div>
          <router-link to="/Blog">
            <button class="ui inverted violet button">Ver</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Comfortaa', cursive;
}
.ui.segment {
  background-color: #95dac1;
  .ui.header {
    text-align: center;
    color: #512d6d;
  }
}

.ui.grid {
  background-color: #8ca1a5;

  .ui.three.cards {
    margin: 2%;
  }
}

.ui.card {
  text-align: center;
  .ui.header {
    color: #512d6d;
  }
}
</style>
