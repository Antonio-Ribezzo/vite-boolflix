<script>
    export default {
        name: 'CardSeriesComp',
        props: ['infoTvSeries']
    }
</script>

<template>
    <!-- singola card -->
    <div class="card mb-3 mx-2">
        <img :src="'https://image.tmdb.org/t/p/w300'+ infoTvSeries.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class="card-title">{{ infoTvSeries.title }}</h2>
            <span class="d-block">Tv-Series</span>
            <span class="card-text">
                Titolo originale:
                <span>{{ infoTvSeries.original_title }}</span>
            </span>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <span class="text-capitalize me-2">language:</span>
                <!-- flag -->
                <img v-if="infoTvSeries.original_language!== 'en'&& 
                infoTvSeries.original_language!== 'ja' &&
                infoTvSeries.original_language!== 'hi' &&
                infoTvSeries.original_language!== 'te' &&
                infoTvSeries.original_language!== 'zh' &&
                infoTvSeries.original_language!== 'cs' &&
                infoTvSeries.original_language!== 'da' &&
                infoTvSeries.original_language!== 'ko'" :src="'https://www.countryflagicons.com/FLAT/64/' + (infoTvSeries.original_language).toUpperCase() + '.png'">
                <img v-if="infoTvSeries.original_language==='en'" :src="'https://www.countryflagicons.com/FLAT/64/GB.png'">
                <img v-if="infoTvSeries.original_language==='ja'" :src="'https://www.countryflagicons.com/FLAT/64/JP.png'">
                <img v-if="infoTvSeries.original_language==='hi'" :src="'https://www.countryflagicons.com/FLAT/64/IN.png'">
                <img v-if="infoTvSeries.original_language==='te'" :src="'https://www.countryflagicons.com/FLAT/64/DE.png'">
                <img v-if="infoTvSeries.original_language==='zh'" :src="'https://www.countryflagicons.com/FLAT/64/CH.png'">
                <img v-if="infoTvSeries.original_language==='cs'" :src="'https://www.countryflagicons.com/FLAT/64/CZ.png'">
                <img v-if="infoTvSeries.original_language==='da'" :src="'https://www.countryflagicons.com/FLAT/64/DK.png'">
                <img v-if="infoTvSeries.original_language==='ko'" :src="'https://www.countryflagicons.com/FLAT/64/KR.png'">
            </li>
            <li class="list-group-item">
                <span class="text-capitalize">vote:</span>
                <span class="ms-2">{{ infoTvSeries.vote_average }}</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    div{
        width: 18rem;
        background-color: rgba(0, 0, 0, 0.275);
        border: none;
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
            border: none;
            li{
                background-color: rgba(0, 0, 0, 0.275);
                border: none;
                img{
                    height: 2rem;
                }
            }
        }
    }
</style>