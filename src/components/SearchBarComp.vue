<script>
    // importo il file store.js per poi renderlo disponibile dentro data()
    import {store} from '../store'

    export default {
        name: 'SearchBarComp',
        data(){
            return{
                store
            }
        },
        methods:{
            concat(){
                let film = this.store.arrayFilm
                let series = this.store.arrayTvSeries
                this.store.arrayAllMovies = film.concat(series)
            }
        }
    }
</script>

<template>
    <div class="d-flex p-5">
        <input class="form-control me-2" type="search" placeholder="Search Film/TV-Series" aria-label="Search" v-model="store.searchText">
        <button class="btn btn-outline-success" type="submit" @click="$emit('search'), concat()">Search</button>
    </div>
</template>

<style lang="scss" scoped>

</style>