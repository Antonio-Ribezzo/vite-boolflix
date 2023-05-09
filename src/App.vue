<script>
  import headerComp from './components/headerComp.vue';

  export default{
    name: 'App',
    components:{
            headerComp
        }
  }

</script>

<template>
  <div>
    <headerComp/>

  </div>

  
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;


</style>
