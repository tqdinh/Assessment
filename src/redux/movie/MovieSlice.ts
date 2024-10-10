import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Movie from "domain/Movie";
import MovieDetail from "domain/MovieDetail";
import { act } from "react";
import { RootState } from "redux/store";
import { mapToListOfDto, mapToMovie } from "uitl/mapper";

interface MovieState {
    movieList: Array<Movie>;
    searchList: Array<Movie>;
    movieDetail: MovieDetail | null
    isLoadingRandom: Boolean | null
    isLoadingSearch: Boolean | null
    isLoadingDetail: Boolean | null
}

const initialState: MovieState = {
    movieList: [],
    searchList: [],
    movieDetail: null,
    isLoadingRandom: false,
    isLoadingSearch: null,
    isLoadingDetail: false,
}
const movieSlice = createSlice({
    name: "MovieSlice",
    initialState: initialState,
    reducers: {
        clearSearchResult(state, action: PayloadAction<any>) {
            state.searchList = []
            state.isLoadingSearch = null
        },

        search(state, action: PayloadAction<string>) {
            state.searchList = []
            state.isLoadingSearch = true
        },
        searchSuccess(state, responePayload: PayloadAction<any>) {
            try {
                const response = responePayload.payload

                if (response.ok && Array.isArray(response.description)) {
                    const moviesDtoList = mapToListOfDto(response.description);

                    state.searchList = moviesDtoList.map(dto => {
                        return mapToMovie(dto)
                    })

                    console.log("searching OK")
                } else {
                    console.error('Failed to fetch movies. Response is not OK.');
                }
            }
            finally {
                state.isLoadingSearch = false
            }
        }
        , searchFail(state, action: PayloadAction<any>) {
            state.isLoadingSearch = false
        },

        cleanRandomList(state) {
            state.isLoadingRandom = true
            state.movieList = []
        },
        getRandomMovie(state, action: PayloadAction<string>) {

        },
        getRandomMovieSuccess(state, responePayload: PayloadAction<any>) {
            try {
                const response = responePayload.payload
                if (response.ok && Array.isArray(response.description)) {
                    const moviesDtoList = mapToListOfDto(response.description);
                    moviesDtoList.forEach(dto => {

                        const movie = mapToMovie(dto)
                        if (state.movieList.length < 10) {
                            state.movieList.push(movie)
                        }
                    })
                    state.isLoadingRandom = false

                } else {
                    state.isLoadingRandom = null
                    console.error('Failed to retrieve movies. Response is not OK.');
                }

            } catch (error) {
                state.isLoadingRandom = null
                console.log("Error " + JSON.stringify(error))
            }



        }
        , getRandomMovieFail(state, action: PayloadAction<string>) {
            state.isLoadingRandom = null
        },

        getMovieDetail(state, action: PayloadAction<string>) {
            state.movieDetail = null
            state.isLoadingDetail = true
            console.log("loading----- true")
        },
        getMovieDetailSuccess(state, action: PayloadAction<any>) {
            state.movieDetail = action.payload
            state.isLoadingDetail = false
            console.log("loading----- false")
        },
        getMovieDetailFail(state, action: PayloadAction<any>) {
            state.isLoadingDetail = null
            console.log("loading----- null")
        }

    }

})


export const { actions: movieActions, reducer: movieReducer } = movieSlice
export const selectMovie = (state: RootState) => state.movie