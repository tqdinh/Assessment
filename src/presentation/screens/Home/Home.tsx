import { MovieDataSourceImpl } from "data/data_sources/MovieDataSourceImpl";
import { MovieRepoImpl } from "data/repositories/MovieRepoImpl";
import { MovieUseCase } from "domain/use_cases/MovieUseCases";
import React, { useCallback, useEffect, useState } from "react";

import { homeStyle } from "./styles/HomeStyle";
import { FlatList, Image, RefreshControl, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import { MovieItemRender } from "./Components/MovieItem";
import { getRandomWord } from "uitl/wordForSearch";
import { useNavigation } from "@react-navigation/native";
import Search from "../Search/Search";
import Detail from "../Detail/Detail";

const Home = () => {

    const navigation = useNavigation<any>()
    const { movieList: listRandom, isLoadingRandom: randoming } = useSelector((state: RootState) => state.movie)
    const [refreshing, setRefreshing] = useState(false);
    const usecase = new MovieUseCase(new MovieRepoImpl(new MovieDataSourceImpl()))

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        usecase.clearRandomMovies()
        usecase.randomMovie(getRandomWord())
        setRefreshing(false);
    }, []);

    useEffect(() => {
        if (listRandom.length <= 10) {

            usecase.randomMovie(getRandomWord())

        }
    }, [listRandom]);

    const handlePress = (imdbUrl: string) => {
        navigation.navigate(Detail.name, { url: imdbUrl })
    };

    return (

        <SafeAreaView style={homeStyle.container}>
            <TouchableOpacity
                style={homeStyle.searchBar}
                onPress={() => navigation.navigate(Search.name)}
            >
                <Text style={homeStyle.placeholderText}>Search here...</Text>
            </TouchableOpacity>

            {null == randoming && listRandom.length == 0 ? (
                <View style={homeStyle.containerError}>
                    <TouchableOpacity onPress={onRefresh}>
                        <Image
                            source={require('../../../assets/icons/ic_error.png')}  // Replace with your image URL
                            style={homeStyle.imageError}
                        />
                    </TouchableOpacity>
                    <Text style={homeStyle.errorText}>Something went wrong. Touch to retry</Text>
                </View>
            ) : (<View style={homeStyle.listContainer}>
                <FlatList
                    data={listRandom}  // Use filtered movie list for FlatList
                    keyExtractor={(item) => item.tilte}  // Unique key
                    numColumns={2}
                    renderItem={({ item }) => <MovieItemRender item={item} onPress={handlePress} />}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                />
            </View>)}



        </SafeAreaView>





    );
}

export default Home