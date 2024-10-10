import { MovieDataSource } from "domain/data_sources/MovieDataSource";
import Movie from "domain/Movie";
import { MovieRepo } from "domain/repositories/MovieRepo";
export class MovieRepoImpl implements MovieRepo {

    private dataSource: MovieDataSource
    constructor(_dataSource: MovieDataSource) {
        this.dataSource = _dataSource
    }
    clearSearch() {
        this.dataSource.clearSearch()
    }
    clearRandomMovies() {
        this.dataSource.clearRandomMovie()
    }
    search(querry: string) {
        this.dataSource.search(querry)
    }
    randomMovie(querry: string) {

        this.dataSource.randomMovie(querry)
    }
    detailMovie(urlImdb: string) {
        this.dataSource.detailMovie(urlImdb)
    }


}