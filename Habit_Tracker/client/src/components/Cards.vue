<template>
	<div class="ui segment">
		<h1 class="ui header">¿Qué es Habit Tracker?</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloremque
			omnis libero? Sunt maxime iste, eos eveniet voluptatum voluptate aut
			fugiat vitae eaque commodi veritatis corporis quod odio nam corrupti.
		</p>
	</div>
  <br/>

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
				<button class="ui inverted violet button">Ver</button>
			</div>
		</div>
		<div class="ui card">
			<div class="content">
				<div class="ui medium image">
					<img src="../assets/calendario.jpg" />
				</div>
				<div class="content">
					<h2 class="ui header">Como crear hábitos</h2>
					<br />
				</div>
				<button class="ui inverted violet button">Ver</button>
			</div>
		</div>
  
		<div class="ui card">
			<div class="content">
				<div class="ui medium image">
					<img src="../assets/meta.jpg" />
				</div>
				<div class="content">
					<h2 class="ui header">Como establecer Metas</h2>
					<br />
				</div>
				<button class="ui inverted violet button">Ver</button>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
	export default {
		name: "Cards",
	};
</script>

<style lang="scss" scoped>
.ui.segment{
 background-color: #95DAC1;
 	.ui.header {   
		text-align: center;
		color: #512d6d;
	}
}


  .ui.grid{
    background-color: #D5BFBF;
  
    .ui.three.cards{
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