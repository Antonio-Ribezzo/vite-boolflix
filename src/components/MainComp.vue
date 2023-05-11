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
    <div class="px-5">
        <!-- inserisco le card -->
        <h2 v-if="store.arrayFilm.length" class="text-white text-capitalize">film</h2>
        <div class="d-flex flex-wrap justify-content-start align-items-start gap-3">
            <CardMovieComp
            v-for="(el,i) in store.arrayFilm"
            :key="i"
            :infoMovie="el"/>
        </div>
        <!-- FILM -->
        <!-- Serie Tv -->
        <h2 v-if="store.arrayTvSeries.length" class="text-white text-capitalize mt-3">tv series</h2>
        <div class="d-flex flex-wrap justify-content-start align-items-start">
            <CardMovieComp
            v-for="(el,i) in store.arrayTvSeries"
            :key="i"
            :infoMovie="el"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>