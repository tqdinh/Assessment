import { MovieRepo } from "domain/repositories/MovieRepo";

export class MovieUseCase {


    private repo: MovieRepo

    constructor(_repo: MovieRepo) {
        this.repo = _repo
    }


    search(querry: string) {
        this.repo.search(querry)
    }

    randomMovie(querry: string) {
        this.repo.randomMovie(querry)
    }
    clearRandomMovies() {
        this.repo.clearRandomMovies()
    }

    detailMovie(urlImdb: string) {
        this.repo.detailMovie(urlImdb)
    }

    clearSearch() {
        this.repo.clearSearch()
    }
}