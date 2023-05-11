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
    <div class="card mb-3 mx-2">
        <img :src="getImage()" class="card-img-top" :alt="getTitle()">
        <div class="card-body">
            <h2 class="card-title">{{ getTitle() }}</h2>
            <span class="d-block text-decoration-underline">{{getTvOrFilm()}}</span>
            <span class="card-text">
                Titolo originale:
                <span>{{ getTitle() }}</span>
            </span>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <span class="text-capitalize me-2">language:</span>
                <!-- flag -->
                <img :src="getFlag(infoMovie.original_language)" alt="">
            </li>
            <li class="list-group-item">
                <span class="text-capitalize">vote:</span>
                <!-- stelle -->
                <div>
                    <i v-for="n in 5" :class="(n <= getVote())? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                    <span class="ms-2">{{getVote()}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        width: 18rem;
        background-color: rgba(0, 0, 0, 0.275);
        border: none;
        img{
            max-height: 25rem;
        }
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