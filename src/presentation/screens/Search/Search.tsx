import { useNavigation } from "@react-navigation/native";
import { MovieDataSourceImpl } from "data/data_sources/MovieDataSourceImpl";
import { MovieRepoImpl } from "data/repositories/MovieRepoImpl";
import { MovieUseCase } from "domain/use_cases/MovieUseCases";
import { useCallback, useEffect, useRef, useState, } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Searchbar } from "react-native-paper";
import { searchStyle } from "./styles/SearchStyle";
import { SearchMovieItemRender } from "./Components/SearchMovieItem";
import Detail from "../Detail/Detail";


const Search = ({ route }: any) => {

    const navigation = useNavigation<any>()
    const { searchList: movieList, isLoadingSearch: searching } = useSelector((state: RootState) => state.movie)
    const usecase = new MovieUseCase(new MovieRepoImpl(new MovieDataSourceImpl()))

    const [searchString, setSearchString] = useState<string>("")

    const onSubmitSearch = () => {
        usecase.search(searchString)
    };

    const handlePress = (imdbUrl: string) => {
        navigation.navigate(Detail.name, { url: imdbUrl })
    }
    const debounceTimeoutRef = useRef<any>(null);

    const handleTextChange = useCallback((e: any) => {
        setSearchString(e.toString())
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }
        debounceTimeoutRef.current = setTimeout(() => {
            if (e && e.trim().length > 0)
                usecase.search(e)
            else {
                usecase.clearSearch()
            }
        }, 700);
    }, []);
    const onImagePress = () => {

    };

    return (

        <SafeAreaView style={searchStyle.container}>

            <Searchbar
                placeholder="Search"
                onChangeText={handleTextChange}
                onSubmitEditing={onSubmitSearch}
                value={searchString}
            />

            {0 != movieList.length ? (
                <View style={searchStyle.listContainer}>
                    <FlatList
                        data={movieList}  // Use filtered movie list for FlatList
                        keyExtractor={(item) => item.tilte}  // Unique key
                        numColumns={1}
                        renderItem={({ item }) => <SearchMovieItemRender item={item} onPress={handlePress} />}
                    />
                </View>
            ) : (
                movieList.length == 0 && searching == false ? (
                    <View style={searchStyle.containerError}>
                        <TouchableOpacity onPress={onImagePress}>
                            <Image
                                source={require('../../../assets/icons/ic_error.png')}  // Replace with your image URL
                                style={searchStyle.imageError}
                            />
                        </TouchableOpacity>
                        <Text style={searchStyle.errorText}>Something went wrong. Touch to retry</Text>
                    </View>

                ) : (
                    <View style={searchStyle.containerError}>
                        <Text style={searchStyle.initText}>Input keywords to search</Text>
                    </View>
                )
            )}
        </SafeAreaView>





    );
}

export default Search