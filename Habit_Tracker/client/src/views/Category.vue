<template>
  <BasicLayout>
      <h2>Estamos en la categoría</h2>
  </BasicLayout>
</template>

<script>
import {onMounted} from 'vue';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import {getCategoriesApi} from '../api/category';
export default {
  name:'Category',
  components: { BasicLayouts 
  }, 
  watch:{
    $router(to,from){
      console.log(to)
    },
  },
  setup(){
    onMounted(async ()=>{
      const response=await getCategoriesApi("Leisure");
      console.log(response);
    });
  },
};
</script>

<style>

</style>