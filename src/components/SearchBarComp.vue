<script>
    // importo il file store.js per poi renderlo disponibile dentro data()
    import {store} from '../store'

    export default {
        name: 'SearchBarComp',
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="d-flex p-5">
        <input class="form-control me-2" type="search" placeholder="Search Film/TV-Series" aria-label="Search" v-model="store.searchText">
        <button class="btn btn-outline-success" type="submit" @click="$emit('search')">Search</button>
    </div>
</template>

<style lang="scss" scoped>

</style>