<script>
    export default {
        name: 'CardMovieComp',
        props: ['infoMovie'],
        methods:{
            // titolo originale
            getTitle(){
                if(this.infoMovie.title){
                    return this.infoMovie.original_title
                } else{
                    return this.infoMovie.original_name
                }
            },
            // film o serie tv
            getTvOrFilm(){
                if(this.infoMovie.title){
                    return 'Film'
                } else{
                    return 'Tv-Series'
                }
            },
            getImage(){
                if(this.infoMovie.poster_path !== null){
                    return (`https://image.tmdb.org/t/p/w500${this.infoMovie.poster_path}`)
                } else{
                    return (`https://image.tmdb.org/t/p/w500/aoKycNwWL1elMO87loyinszXC4N.jpg`)
                }
            },
            // bandiere
            getFlag(x){
                if(x !== 'en' && x!== 'ja' && x!== 'hi' && x!== 'te' && x!== 'zh' && x!== 'cs' && x!== 'da' && x!== 'ko' && x!== 'ta' && x!== 'xx'){
                    return (`https://www.countryflagicons.com/FLAT/64/${(x).toUpperCase()}.png`)
                } else if(x === 'en'){
                    return ('https://www.countryflagicons.com/FLAT/64/GB.png')
                } else if(x === 'ja'){
                    return ('https://www.countryflagicons.com/FLAT/64/JP.png')
                } else if(x === 'hi'){
                     return ('https://www.countryflagicons.com/FLAT/64/IN.png')
                } else if(x === 'te'){
                     return ('https://www.countryflagicons.com/FLAT/64/DE.png')
                } else if(x === 'zh'){
                     return ('https://www.countryflagicons.com/FLAT/64/CH.png')
                } else if(x === 'cs'){
                     return ('https://www.countryflagicons.com/FLAT/64/CZ.png')
                } else if(x === 'da'){
                     return ('https://www.countryflagicons.com/FLAT/64/DK.png')
                } else if(x === 'ko'){
                    return ('https://www.countryflagicons.com/FLAT/64/KR.png')
                } else if(x === 'ta' || x === 'xx'){
                    return ('https://www.countryflagicons.com/FLAT/64/TW.png')
                }
            },
            // votazione: restituisce un voto compreso da 0 a 5
            getVote(){
                return Math.ceil(this.infoMovie.vote_average / 2)
            }
        }
    }
</script>

<template>
    <!-- singola card -->
    <div id="cardMovie" class="mb-3 mx-2 position-relative">
        <img :src="getImage()" class="card-img-top" :alt="getTitle()">
        <!-- info Movie -->
        <div id="infoMovie" class="position-absolute d-flex flex-column justify-content-start align-items-start p-3 text-white">
            <h2 class="card-title">{{ getTitle() }}</h2>
            <span class="d-block text-decoration-underline">{{getTvOrFilm()}}</span>
            <span class="card-text">
                Titolo originale:
                <span>{{ getTitle() }}</span>
            </span>
            <div>
                <span class="text-capitalize me-2">language:</span>
                <!-- flag -->
                <img :src="getFlag(infoMovie.original_language)" :alt="infoMovie.original_language">
            </div>
            <!-- stelle -->
            <div>
                <span class="text-capitalize">vote:</span>
                <i v-for="n in 5" :class="(n <= getVote())? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                <span class="ms-2">{{getVote()}}</span>
            </div>
            <!-- overview -->
            <div class="overview">
                <h3 class="text-capitalize mb-0 mt-2">overview:</h3>
                <p>{{ infoMovie.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #cardMovie{
        height: 25rem;
        width: 18rem;
        background-color: rgba(0, 0, 0, 0.275);
        border: none;
        img{
            max-height: 100%;
        }
        #infoMovie{
            max-height: 100%;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            h2{
                font-size: 1.8rem;
            }
            span{
                font-weight: 500;
                span{
                    font-style: italic;
                }
            }
            div{
                img{
                    height: 2rem;
                }
            }
            .overview{
                overflow:auto;
                h3{
                    font-size: 1.3rem;
                }
            }
        }
    }
</style>