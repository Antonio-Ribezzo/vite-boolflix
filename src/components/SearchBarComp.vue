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
    <div :class="(store.counterBool)? 'd-flex':'d-none'">
        <input @keyup.enter="$emit('searchMov')" class="form-control me-2" type="search" placeholder="Search Film/TV-Series" aria-label="Search" v-model="store.searchText">
        <button class="btn btn-outline-light" type="submit" @click="$emit('searchMov'), concat()">Search</button>
    </div>
</template>

<style lang="scss" scoped>
    i{
        cursor: pointer;
        &:hover{
            color: white;
            background-color: rgba(75, 77, 78, 0.754);
        }
    }
</style>