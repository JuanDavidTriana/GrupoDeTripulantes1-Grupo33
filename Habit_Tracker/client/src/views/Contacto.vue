<template>
  <BasicLayouts>
    <div>
      <div id="contacto" class="contacto">
        <h2>Contacto</h2>
        <form class="formulario" action="#" method="POST">
          <legend>Contáctanos llenando todos los campos</legend>
          <div class="contenedor de campos">
            <div class="campo">
              <label>Nombre</label>
              <input type="text" name="nombre" placeholder="Nombre">
            </div>
            <div class="campo">
              <label>Teléfono</label>
              <input type="tel" name="telefono" placeholder="Teléfono">
            </div>
            <div class="campo w-100">
              <label>Correo</label>
              <input type="email" name="correo" placeholder="Mail">
            </div>
            <div class="campo w-100">
              <label>Mensaje:</label>
              <textarea> </textarea>
            </div>
            <div class="enviar">
              <input class="boton" type="submit" value="Enviar">
            </div>
          </div>
        </form>
      </div>
    </div>
  </BasicLayouts>
</template>

<script>
import BasicLayouts from "../layouts/BasicLayouts.vue";
export default {
  name: "Contacto",
  components: {
    BasicLayouts,
  },
};
</script>

<style lang="scss" scoped>
  .formulario {
    background-color: var(--gris);
    padding: 2rem;
    border-radius: 10px;
  }
  .formulario legend {
    text-align: center;
    font-size: 1.2rem;
    color: var(--primario);
    margin-bottom: 2rem;
    display: block;
    text-transform: uppercase;
    font-weight: 700;
  }
  .contenedor campos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .campo {
    margin-bottom: 1rem;
    width: 100%;
  }
  .w-100 {
    flex: 0 0 100%;
  }
  .campo label {
    color: var(--blanco);
    font-weight: 700;
    margin-bottom: 0.5rem;
    display: block;
  }
  .campo input[type='text'],
  .campo input[type='tel'],
  .campo input[type='email'],
  .campo textarea {
    width: 100%;
    padding: 0.5rem;
    border: black;
    border-radius: 0.5rem;
  }
  .campo textarea {
    height: 4rem;
  }
  .enviar {
    display: flex;
    justify-content: flex-end;
  }
</style>