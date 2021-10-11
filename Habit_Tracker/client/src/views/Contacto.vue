<template>
	<BasicLayouts>
		<div>
			<center>
				<h2>CONTACTANOS</h2>
				<br />
				<form class="ui form" action="#" method="POST">
					<br />
					<h1 class="ui title">Contáctanos llenando todos los campos</h1>

					<div class="field">
						<label>Nombre</label>
						<input type="text" name="nombre" placeholder="Nombre y Apellido " />
					</div>
					<div class="field">
						<label>Teléfono</label>
						<input type="tel" name="telefono" placeholder="Teléfono" />
					</div>
					<div class="field w-100">
						<label>Correo</label>
						<input type="email" name="correo" placeholder="Email" />
					</div>
					<div class="field w-100">
						<label>Mensaje:</label>
						<textarea> </textarea>
					</div>
				</form>
				<br />

				<button type="submit" class="ui gray button">Enviar</button>
			</center>
			<br />
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
		max-width: 650px;
		margin: 1%;
		background-color: #8ca1a5;
		padding: 2rem;
		border-radius: 15px;
	}
	.ui.title {
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		text-transform: uppercase;
		font-weight: 700;
	}

	.field {
		text-align: left;
		margin-bottom: 1rem;
		width: 100%;
	}
</style>