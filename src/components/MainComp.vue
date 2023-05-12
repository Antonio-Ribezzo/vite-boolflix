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
        },
        methods: {
            scrollHorizontal(e, elementoHtml){
                console.log(e)
                const container = document.getElementById(elementoHtml)

                if(e.deltaY > 0){
                    container.scrollLeft += 100
                } else{
                    container.scrollLeft -= 100
                }
            }
        }
    }
</script>

<template>
    <!-- area dove inserire le card -->
    <div class="px-5">
        <!-- inserisco le card -->
        <!-- FILM -->
        <h2 v-if="store.arrayFilm.length" class="text-white text-capitalize">film</h2>
        <div id="containerFilm" @wheel.prevent="scrollHorizontal($event, 'containerFilm')" class="row flex-nowrap overflow-x-hidden gap-3">
            <CardMovieComp
            v-for="(el,i) in store.arrayFilm"
            :key="i"
            :infoMovie="el"/>
        </div>
        <!-- Serie Tv -->
        <h2 v-if="store.arrayTvSeries.length" class="text-white text-capitalize mt-3">tv series</h2>
        <div id="containerSerie" @wheel.prevent="scrollHorizontal($event, 'containerSerie')" class="row flex-nowrap overflow-x-hidden gap-3">
            <CardMovieComp
            v-for="(el,i) in store.arrayTvSeries"
            :key="i"
            :infoMovie="el"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>