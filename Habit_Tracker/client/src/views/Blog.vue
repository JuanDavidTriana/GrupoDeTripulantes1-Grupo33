<template>
  <BasicLayouts>
    <div class="por que">
      <center>
        <h2>Por qué adquirir hábitos</h2>
        <p>
          Los pequeños cambios incrementales son los precursores de grandes
          transformaciones
        </p>
        <p>
          No necesitas grandes cambios para obtener grandes transformaciones
        </p>

        <div>
          <img
            src="../assets/habits.jpg"
            alt="change your habits, change your pfe"
          />
        </div>
      </center>
    </div>
    <div class="como">
      <center>
        <h2>¿Cómo crear habitos?</h2>
        <div>
          <p>Hazlo obvio</p>
          <p>Hazlo atractivo</p>
          <p>Hazlo facil</p>
          <p>Hazlo satisfactorio</p>
        </div>
        <div>
          <img src="../assets/como.jpg" alt="libro" />
        </div>
      </center>
    </div>
    <div class="metas">
      <center>
        <h2 id="metas">¿Cómo crear metas?</h2>
        <img src="../assets/goal.jpg" alt="metas" />
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
          implementas el hábito de seguir estrategias diarias puedes sobrellevar
          la enormidad asociada con las metas de vida, enfocándote en escenarios
          a corto plazo y en acciones del día a día.
        </p>
        <br />
      </center>
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
.psta {
  text-apgn: center;
}
</style>
