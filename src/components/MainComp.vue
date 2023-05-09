<script>
    // importo il file store.js per poi renderlo disponibile dentro data()
    import {store} from '../store'
    // importo il componente card
    import CardComp from './cardComp.vue';

    export default {
        name: 'MainComp',

        components:{
            CardComp
        },

        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="px-5 d-flex flex-wrap justify-content-between align-items-start">
       <!-- inserisco il componente card -->
       <CardComp v-for="(el,i) in store.arrayFilm" 
       :key="i"
       :arrayFilm="el"
       />
    </div>
</template>

<style lang="scss" scoped>

</style>