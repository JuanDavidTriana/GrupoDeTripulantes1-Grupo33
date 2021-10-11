<template>
  <BasicLayouts>
    <div>
      <div id="contacto" class="contacto">
        <form class="ui form" action="#" method="POST">
          <h1 class="ui title">Contáctanos llenando todos los campos</h1>
          <div class="contenedor de campos">
            <div class="campo">
              <label>Nombre</label>
              <input type="text" name="nombre" placeholder="Nombre" />
            </div>
            <div class="campo">
              <label>Teléfono</label>
              <input type="tel" name="telefono" placeholder="Teléfono" />
            </div>
            <div class="campo w-100">
              <label>Correo</label>
              <input type="email" name="correo" placeholder="Mail" />
            </div>
            <div class="campo w-100">
              <label>Mensaje:</label>
              <textarea> </textarea>
            </div>
            <div class="enviar">
              <input
                class="ui button fluid primary"
                type="submit"
                value="Enviar"
              />
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
* {
  font-family: "Comfortaa", cursive;
}
.ui.form {
  background-color: var(--gris);
  padding: 2rem;
  border-radius: 10px;
}
.ui.title {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
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
.campo input[type="text"],
.campo input[type="tel"],
.campo input[type="email"],
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