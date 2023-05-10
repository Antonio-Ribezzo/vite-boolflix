import {reactive} from 'vue'

export const store = reactive({
    arrayFilm: [],
    arrayTvSeries: [],
    arrayAllMovies: [],
    searchText:'',
    apiKey: 'ebc03a47ce4ef95670ef8345f682ef5b'
})