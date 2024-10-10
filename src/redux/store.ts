import createSagaMiddleware from '@redux-saga/core'
import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSaga from 'saga/rootsaga'
import { movieReducer } from './movie/MovieSlice'
const middlewares: any = []
const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)
const appReducer = combineReducers({
    movie: movieReducer
})

const rootReducer = (state: any, action: AnyAction) => {
    return appReducer(state, action)
}
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(middlewares)
})

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

