export interface MovieDataSource {
    search(querry: string): any
    randomMovie(querry: string): any
    detailMovie(urlImdb: string): any
    clearRandomMovie(): any
    clearSearch()
}