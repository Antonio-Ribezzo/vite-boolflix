<script>
  // importo axios
  import axios from 'axios';
  // importo il file store.js per poi renderlo disponibile dentro data()
  import {store} from './store.js'
  // importo i componenti
  import SearchBarComp from './components/SearchBarComp.vue';
  import MainComp from './components/MainComp.vue';
  import FooterComp from './components/FooterComp.vue'


  export default{
    name: 'App',
    components:{
      SearchBarComp,
      MainComp,
      FooterComp
    },

    data(){
      return{
        store,
        navItem:[
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
      },
      activeSearchBar(){
        if(store.counterBool==false){
            store.counterBool = true
        }else{
            store.counterBool = false
        }
      },
      changePage(i){
        this.store.pageActive = i
      }
    }
  }

</script>
      
<template>
  <div class="containerApp">
    <!-- header -->
    <header>
      <div id="containerHeader" class="d-flex justify-content-between align-items-center py-2 px-5 position-relative">
        <!-- parte sinistra -->
        <img class="position-absolute" src="/img/logoBoolflix.png" alt="logo-BoolFlix">
          <div id="sxHeader" class="d-flex justify-content-between align-items-center">
            <!-- navbar -->
            <nav>
                <div class="justify-content-between align-items-center">
                    <a v-for="(el,i) in navItem" :key="i" class="col" href="#" :class="(i === store.pageActive)? 'text-white': ''" @click="changePage(i)">
                        <span> {{ el }} </span>
                    </a>
                </div>
            </nav>
          </div>

          <!-- parte destra -->
          <div id="dxHeader" class="d-flex justify-content-between align-items-center">
            <!-- comonente search bar -->
          <SearchBarComp @searchMov="activeApi"/>
          <i class="fa-solid fa-magnifying-glass mx-2 p-2 rounded-circle" @click="activeSearchBar"></i>
          <span class="text-capitalize mx-2">bambini</span>
          <i class="fa-regular fa-bell mx-2"></i>
          <img class="mx-2" src="/img/accountNetflix.png" alt="">
          <i class="fa-solid fa-caret-down mx-2"></i>
        </div>
      </div>
    </header>
    
    <!-- componente main -->
    <MainComp/>

    <!-- component footer -->
    <FooterComp/>

  </div>
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;
  
  .containerApp{
    background-color: #141414
  }

  header{
    position: sticky;
    top: 0;
    z-index: 9999999;
    #containerHeader{
      height: 4rem;
      background: rgb(20,20,20);
      background: linear-gradient(0deg, rgba(20,20,20,0.742734593837535) 0%, rgba(20,20,20,1) 50%);
      margin-bottom: 2rem;
      img{
        height: 2rem;
      }
      #sxHeader{
        margin-left: 8rem;
        nav{
          div{
            list-style: none;
            // margin: 0 auto;
            a{
              cursor: pointer;
              margin: 0 1rem;
              font-size: 0.8rem;
              color: rgb(197, 195, 195);
              span{
                &:hover{
                  color: white;
                }
              }
            }
          }
        }
      }
      #dxHeader{
        color: rgb(197, 195, 195);
        span,i{
          &:hover{
            color: white;
            cursor: pointer;
          }
        }
        i{
          font-size: 1.2rem;
        }
        img{
          height: 2rem;
          cursor: pointer;
        }
      }
    }
  }
</style>
