import { AnyAction } from "@reduxjs/toolkit";
import { MovieDataSource } from "domain/data_sources/MovieDataSource";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { movieActions } from "redux/movie/MovieSlice";

export class MovieDataSourceImpl implements MovieDataSource {

    protected dispatch = useDispatch()
    search(querry: string) {
        this.dispatch(movieActions.search(querry))
    }
    clearSearch() {
        this.dispatch(movieActions.clearSearchResult())
    }
    randomMovie(querry: string) {
        this.dispatch(movieActions.getRandomMovie(querry))
    }

    clearRandomMovie() {
        this.dispatch(movieActions.cleanRandomList())
    }

    detailMovie(urlImdb: string) {
        this.dispatch(movieActions.getMovieDetail(urlImdb))
    }

}