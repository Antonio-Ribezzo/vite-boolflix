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
        store,
        navItem: [
          'Home',
          'Serie Tv',
          'Film',
          'Nuovi e popolari',
          'La mia lista',
          'Sfoglia per lingua'
        ]
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
    <!-- header -->
    <header>
      <div id="containerHeader" class="d-flex justify-content-between align-items-center py-2 px-5">
        <!-- parte sinistra -->
        <div class="d-flex justify-content-between align-items-center">
            <img src="/img/logoBoolflix.png" alt="logo-BoolFlix">
            <!-- navbar -->
            <nav>
                <ul class="d-flex justify-content between align-items-center">
                    <li v-for="(el,i) in navItem" :key="i" class="nav-item">
                        <a :class="(i == 0)? 'selectedPage' : ''" href="#">{{el}}</a>
                    </li>
                </ul>
            </nav>
          </div>

        <!-- parte destra -->
        <div class="d-flex justify-content-between align-items-center text-white">
          <!-- comonente search bar -->
          <SearchBarComp @search="activeApi"/>
          <span class="text-capitalize mx-2">bambini</span>
          <i class="fa-regular fa-bell mx-2"></i>
          <img class="mx-2" src="/img/accountNetflix.png" alt="">
          <i class="fa-solid fa-caret-down mx-2"></i>


        </div>
      </div>
    </header>
    
    <!-- componente main -->
    <MainComp/>

  </div>

  
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;
  
  .containerApp{
    background-color: #141414
  }

  header{
    #containerHeader{
      height: 4rem;
      background-color: #141414;
      margin-bottom: 2rem;
      div{
        img{
          height: 2rem;
        }
        nav{
          ul{
            list-style: none;
            margin: 0 auto;
            li{
              margin: 0 1rem;
              font-size: 0.8rem;
              .selectedPage{
                color: white;
              }
              a{
                text-decoration: none;
                color: rgb(197, 195, 195);
              }
            }
          }
        }
      }
    }
  }
</style>
