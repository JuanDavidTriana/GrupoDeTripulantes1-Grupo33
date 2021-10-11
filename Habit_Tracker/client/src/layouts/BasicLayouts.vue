<template>
  <div class="basic-layout">
    <Header />
    <Menu />
    <div class="ui container">
      <slot />
    </div>
  </div>

  <Cart />
</template>

<script>
import Menu from "../components/Menu.vue";
import Header from "../components/Header.vue";
import Cart from "../components/Cart/Cart.vue";

export default {
  name: "BasicLayouts",
  components: {
    Menu,
    Header,
    Cart,
  },
};
</script>