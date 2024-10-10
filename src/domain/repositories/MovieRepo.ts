export interface MovieRepo {
    search(querry: string): any
    randomMovie(querry: string): any
    detailMovie(urlImdb: string): any
    clearRandomMovies(): any
    clearSearch(): any
}