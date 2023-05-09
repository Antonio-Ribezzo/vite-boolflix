<script>
  // importo axios
  import axios from 'axios';
  // importo il file store.js per poi renderlo disponibile dentro data()
  import {store} from './store.js'
  // importo i componenti
  import SearchBarComp from './components/SearchBarComp.vue';
  import MainComp from './components/MainComp.vue';


  export default{
    name: 'App',
    components:{
            SearchBarComp,
            MainComp,
        },

    data(){
      return{
        store
      }
    },

    methods: {
      activeApi(){
        if(store.searchText !== ''){
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ebc03a47ce4ef95670ef8345f682ef5b&query=${store.searchText}`)
          .then((res)=>{
            this.store.arrayFilm = res.data.results
          })
        }
      }
    }

  }

</script>

<template>
  <div>
    <SearchBarComp @search="activeApi"/>
    <!-- componente main -->
    <MainComp/>

  </div>

  
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;


</style>
