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
                <span class="text-capitalize me-2">language:</span>
                <img v-if="arrayFilm.original_language!== 'en'&& 
                arrayFilm.original_language!== 'ja' &&
                arrayFilm.original_language!== 'hi' &&
                arrayFilm.original_language!== 'te' &&
                arrayFilm.original_language!== 'zh' &&
                arrayFilm.original_language!== 'cs' &&
                arrayFilm.original_language!== 'da' &&
                arrayFilm.original_language!== 'ko'" :src="'https://www.countryflagicons.com/FLAT/64/' + (arrayFilm.original_language).toUpperCase() + '.png'">
                <img v-if="arrayFilm.original_language==='en'" :src="'https://www.countryflagicons.com/FLAT/64/GB.png'">
                <img v-if="arrayFilm.original_language==='ja'" :src="'https://www.countryflagicons.com/FLAT/64/JP.png'">
                <img v-if="arrayFilm.original_language==='hi'" :src="'https://www.countryflagicons.com/FLAT/64/IN.png'">
                <img v-if="arrayFilm.original_language==='te'" :src="'https://www.countryflagicons.com/FLAT/64/DE.png'">
                <img v-if="arrayFilm.original_language==='zh'" :src="'https://www.countryflagicons.com/FLAT/64/CH.png'">
                <img v-if="arrayFilm.original_language==='cs'" :src="'https://www.countryflagicons.com/FLAT/64/CZ.png'">
                <img v-if="arrayFilm.original_language==='da'" :src="'https://www.countryflagicons.com/FLAT/64/DK.png'">
                <img v-if="arrayFilm.original_language==='ko'" :src="'https://www.countryflagicons.com/FLAT/64/KR.png'">
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
        
        ul{
            li{
                img{
                    height: 2rem;
                }
            }
        }
    }
</style>