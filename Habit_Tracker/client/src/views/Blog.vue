<template>
  <BasicLayouts>
    <div class="ui segment">
      <div class="por que">
        <center>
          <h2 class="ui title">¿Por qué adquirir hábitos?</h2>
          <p>
            Los pequeños cambios incrementales son los precursores de grandes
            transformaciones.
          </p>
          <p>
            No necesitas grandes cambios para obtener grandes transformaciones.
          </p>
          <p>
            Cambiar de hábitos significa cambiar tu identidad. Transformarte en
            una versión mejor de ti mismo.
          </p>

          <div>
            <img
              src="../assets/habits.jpg"
              alt="change your habits, change your pfe"
            />
          </div>
        </center>
      </div>
    </div>
    <div class="ui segment">
      <div class="como">
        <center>
          <h2 class="ui title">¿Cómo crear hábitos?</h2>
          <div>
            <p>Hazlo obvio</p>
            <p>Hazlo atractivo</p>
            <p>Hazlo facil</p>
            <p>Hazlo satisfactorio</p>
          </div>
          <br />
          <div>
            <img src="../assets/como.jpg" alt="libro" />
          </div>
        </center>
      </div>
    </div>
    <div class="ui segment">
      <div class="metas">
        <center>
          <h2 class="ui title">¿Cómo crear metas?</h2>
          <img src="../assets/goal.jpg" alt="metas" />
          <br />
          <br />
          <p>
            La mayoría de las personas tiene objetivos. Ya sea personales o de
            negocios, pero todos nos estamos moviendo hacia una dirección
            planeada. Sin embargo, aunque los objetivos a largo plazo nos dan
            dirección, son los objetivos diarios los que nos permiten crear
            parteaguas a corto plazo que van construyendo nuestro éxito.
          </p>

          <br />

          <p>
            Los objetivos a largo plazo pueden ser abrumadores, pero si
            implementas el hábito de seguir estrategias diarias puedes
            sobrellevar la enormidad asociada con las metas de vida, enfocándote
            en escenarios a corto plazo y en acciones del día a día.
          </p>
          <br />
        </center>
      </div>
    </div>
  </BasicLayouts>
</template>

<script>
import BasicLayouts from '../layouts/BasicLayouts.vue';
export default {
  name: 'Blog',
  components: {
    BasicLayouts,
  },
};
</script>

<style lang="scss" scoped>
.ui.title {
  font-family: 'Comfortaa', cursive;
  color: #512d6d;
}
.ui.segment {
}
</style>
