<script>
    export default {
        name: 'CardComp',
        props: ['arrayFilm']
    }
</script>

<template>
   <div class="card mb-3 mx-2">
        <img :src="'https://image.tmdb.org/t/p/w300'+ arrayFilm.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class="card-title">{{ arrayFilm.title }}</h2>
            <span class="card-text">
                Titolo originale:
                <span>{{ arrayFilm.original_title }}</span>
            </span>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <span class="text-capitalize">language:</span>
                <span class="text-uppercase ms-2">{{ arrayFilm.original_language }}</span>
            </li>
            <li class="list-group-item">
                <span class="text-capitalize">vote:</span>
                <span class="ms-2">{{ arrayFilm.vote_average }}</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    div{
        width: 15rem;
        
        div{
            h2{
                font-size: 1.3rem;
            }
            span{
                font-weight: 500;
                span{
                    font-style: italic;
                }
            }
        }
    }
</style>