import { PayloadAction } from "@reduxjs/toolkit";
import { getMovieDetail, SearchTheMovie } from "api/appApis/movieApi";
import { REQUEST_METHODS } from "api/iAPI";
import { call, put, takeLatest } from "redux-saga/effects";
import { movieActions } from "redux/movie/MovieSlice";


function* randomMovies(action: PayloadAction<string>): any {
    try {
        const res = yield call(SearchTheMovie, REQUEST_METHODS.GET, action.payload)
        yield put(movieActions.getRandomMovieSuccess(res))

    } catch (error: any) {
        yield put(movieActions.getRandomMovieFail(error.toString))

    }
}

function* searchMovies(action: PayloadAction<string>): any {
    try {
        const res = yield call(SearchTheMovie, REQUEST_METHODS.GET, action.payload)
        yield put(movieActions.searchSuccess(res))

    } catch (error: any) {
        yield put(movieActions.searchFail(error.toString()))
    }
}


function* movieDetail(action: PayloadAction<string>): any {
    try {

        const res = yield call(getMovieDetail, REQUEST_METHODS.GET, action.payload)
        yield put(movieActions.getMovieDetailSuccess(res))

    } catch (error: any) {
        console.log("MOVIIIIII fail")
        yield put(movieActions.getMovieDetailFail(error.toString()))
    }
}





function* MovieSaga() {
    yield takeLatest(movieActions.getRandomMovie, randomMovies)
    yield takeLatest(movieActions.search, searchMovies)
    yield takeLatest(movieActions.getMovieDetail, movieDetail)
}

export default MovieSaga
