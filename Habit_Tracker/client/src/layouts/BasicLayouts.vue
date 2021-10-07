<template>
  <div class="basic-layout">
    <Header />
    <Menu />
    <div class="ui container">
      <slot />
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Header from "../components/Header.vue";


export default {
  name: "BasicLayouts",
  components: {
    Menu,
    Header,
   
  },
};
</script>

<style>
</style>