<script>
    // importo il file store.js per poi renderlo disponibile dentro data()
    import {store} from '../store'

    export default {
        name: 'SearchBarComp',
        data(){
            return{
                store,
                counterBool: false
            }
        },
        methods:{
            concat(){
                let film = this.store.arrayFilm
                let series = this.store.arrayTvSeries
                this.store.arrayAllMovies = film.concat(series)
            },
            activeSearchBar(){
                if(this.counterBool==false){
                    this.counterBool = true
                }else{
                    this.counterBool = false
                }
            }
        }
    }
</script>

<template>
    <div :class="(counterBool)? 'd-flex':'d-none'">
        <input class="form-control me-2" type="search" placeholder="Search Film/TV-Series" aria-label="Search" v-model="store.searchText">
        <button class="btn btn-outline-light" type="submit" @click="$emit('search'), concat()">Search</button>
    </div>
    <i class="fa-solid fa-magnifying-glass mx-2 p-2 rounded-circle" @click="activeSearchBar"></i>
</template>

<style lang="scss" scoped>
    i{
        cursor: pointer;
        font-size: 1.5rem;
        &:hover{
            background-color: rgba(240, 248, 255, 0.421);
        }
    }
</style>