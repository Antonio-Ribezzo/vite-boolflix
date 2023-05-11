<script>
    export default {
        name: 'FooterComp',
        data(){
            return{
                arrayFooterItems:[
                    'Audiodescrizione',
                    'Rapporti con gli investitori',
                    'Note legali',
                    'Centro assistenza',
                    'Opportunità di lavoro',
                    'Preferenze per i cookie',
                    'Carte regalo',
                    'Condizioni di utilizzo',
                    "Informazioni sull'azienda",
                    'Media Center',
                    'Privacy',
                    'Contattaci'
                ]
            }
        }
    }
</script>


<template>
    <footer class="py-5">
        <div class="container">
            <div class="text-white mb-4">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
            <!-- nav footer -->
            <div id="navFooter" class="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <span class="d-block" v-for="n in 3">{{ arrayFooterItems[n-1] }}</span>
                </div>
                <div>
                    <span class="d-block" v-for="n in 3">{{ arrayFooterItems[n+2] }}</span>
                </div>
                <div>
                    <span class="d-block" v-for="n in 3">{{ arrayFooterItems[n+5] }}</span>
                </div>
                <div>
                    <span class="d-block" v-for="n in 3">{{ arrayFooterItems[n+8] }}</span>
                </div>
            </div>
            <!-- button footer -->
            <button type="button" class="btn btn-outline-secondary">Codice di servizio</button>
            <!-- copyright -->
            <span class="d-block mt-3">&copy; 1997-2023 Boolflix, Inc.</span>
        </div>


    </footer>
</template>


<style lang="scss" scoped>

    footer{
        // height: 10rem;
        background-color: #141414;
        .container{
            div{
                i{
                    font-size: 1.5rem;
                    margin: 0 1.5rem 0 0;
                }
            }
            #navFooter{
                div{
                    span{
                        margin-bottom: 1rem;
                        font-size: 0.8rem;
                        color: rgb(116, 113, 113);
                        &:hover{
                            color: white;
                        }
                    }
                }
            }
            span{
                font-size: 0.8rem;
                color: rgb(116, 113, 113);
            }
        }

    }

</style>