<script>
    // importo il file store.js per poi renderlo disponibile dentro data()
    import {store} from '../store'
    // importo il componente card film
    import CardFilmComp from './CardFilmComp.vue';
    // importo il componente card serie tv
    import CardSeriesComp from './CardSeriesComp.vue';

    export default {
        name: 'MainComp',

        components:{
            CardFilmComp,
            CardSeriesComp
        },

        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <!-- area dove inserire le card -->
    <div class="px-5 d-flex flex-wrap justify-content-between align-items-start">
       <!-- inserisco il componente card film -->
       <CardFilmComp v-for="(el,i) in store.arrayFilm" 
       :key="i"
       :infoFilm="el"
       />
       <!-- inserisco il componente card serie tv -->
       <CardSeriesComp v-for="(el,i) in store.arrayTvSeries" 
       :key="i"
       :infoTvSeries="el"
       />
    </div>
</template>

<style lang="scss" scoped>

</style>