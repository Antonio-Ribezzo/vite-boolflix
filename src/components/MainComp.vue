<script>
    // importo il file store.js per poi renderlo disponibile dentro data()
    import {store} from '../store'
    // importo il componente singola card
    import CardMovieComp from './CardMovieComp.vue';

    export default {
        name: 'MainComp',

        components:{
            CardMovieComp,
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
        <!-- inserisco le card -->
        <!-- FILM -->
        <CardMovieComp
        v-for="(el,i) in store.arrayFilm"
        :key="i"
        :infoMovie="el"/>
        <!-- Serie Tv -->
        <CardMovieComp
        v-for="(el,i) in store.arrayTvSeries"
        :key="i"
        :infoMovie="el"/>
    </div>
</template>

<style lang="scss" scoped>

</style>