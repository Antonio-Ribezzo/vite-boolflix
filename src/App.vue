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

    created(){
      this.activeApi()
    },

    methods: {
      activeApi(){
        if(store.searchText !== ''){
          // chiamata api film
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=${store.searchText}`)
          .then((res)=>{
            this.store.arrayFilm = res.data.results
          })
          // chiamata api serie tv
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${store.searchText}`)
          .then((res)=>{
            this.store.arrayTvSeries =res.data.results
          })
        }else{
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=marvel`)
          .then((res)=>{
            this.store.arrayFilm = res.data.results
          })

          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=marvel`)
          .then((res)=>{
            this.store.arrayTvSeries = res.data.results
          })
        }
      }
    }
  }

</script>
      
<template>
  <div class="containerApp">
    <!-- comonente search bar -->
    <SearchBarComp @search="activeApi"/>
    <!-- componente main -->
    <MainComp/>

  </div>

  
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;
  
  .containerApp{
    background-color: orange
  }


</style>
