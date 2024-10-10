import { MovieDataSourceImpl } from "data/data_sources/MovieDataSourceImpl"
import { MovieRepoImpl } from "data/repositories/MovieRepoImpl"
import { MovieUseCase } from "domain/use_cases/MovieUseCases"
import { useEffect } from "react"
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Skeleton } from '@rneui/base'
const Detail = ({ route }: any) => {

    const { movieDetail: detail, isLoadingDetail: loading } = useSelector((state: RootState) => state.movie)

    const usecase = new MovieUseCase(new MovieRepoImpl(new MovieDataSourceImpl()))

    const { url: imdbUrl } = route.params

    useEffect(() => {
        usecase.detailMovie(imdbUrl)
    }, [])
    const onImagePress = () => {
        usecase.detailMovie(imdbUrl)
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {loading == null ? (
                <View style={styles.containerError}>
                    <TouchableOpacity onPress={onImagePress}>
                        <Image
                            source={require('../../../assets/icons/ic_error.png')}  // Replace with your image URL
                            style={styles.imageError}
                        />
                    </TouchableOpacity>
                    <Text style={styles.errorText}>Something went wrong. Touch to retry</Text>
                </View>
            ) : (
                loading != true ? (<ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{detail?.title}</Text>
                        <Text style={styles.subInfo}>{detail?.datePublished}  | {detail?.duration}</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Image
                            source={{ uri: detail?.poster }} // Replace with actual image URL
                            style={styles.poster}
                            resizeMode="contain"
                        />
                        <Text style={styles.description}>
                            {detail?.description}
                        </Text>
                    </View>


                    <FlatList
                        data={detail?.genre}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.genreButton}>
                                <Text style={styles.genreText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />


                    <View style={styles.ratingSection}>
                        <View style={styles.ratingItem}>
                            <Text style={styles.ratingScore}>⭐ {detail?.ratingValue}/10</Text>
                            <Text style={styles.ratingSub}>{detail?.ratingCount}</Text>
                        </View>

                    </View>


                    <View style={styles.castSection}>
                        <View style={styles.castHeader}>
                            <Text style={styles.castTitle}>Cast</Text>

                        </View>
                        <Text style={styles.topBilledCast}>Top Billed Cast</Text>
                        <FlatList
                            data={detail?.actors}
                            horizontal
                            renderItem={({ item }) => (
                                <View style={styles.castItem}>
                                    <Image source={{ uri: "https://via.placeholder.com/100.png?text=Lewis+Pullman" }} style={styles.castImage} />
                                    <Text style={styles.castName}>{item.name}</Text>

                                </View>
                            )}

                        />
                    </View>
                </ScrollView>) : (<View style={styles.container}>
                    <View style={styles.header}>
                        <Skeleton animation="wave" style={styles.titleSkeleton} />
                        <Skeleton animation="wave" style={styles.subInfoSkeleton} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Skeleton animation="wave"
                            style={styles.poster}
                        />
                        <Skeleton animation="wave" style={styles.description} />
                    </View>

                    <Skeleton animation="wave" style={styles.genreTextSkeleton} />
                    <Skeleton animation="wave" style={styles.ratingSection}>
                    </Skeleton>
                    <Skeleton animation="wave" style={styles.castSectionSkeleton} />
                </View>)
            )}




        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },

    container: {

    },

    header: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: '#333',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    titleSkeleton: {
        width: "100%",
        height: "20%",
    },

    subInfo: {
        color: '#aaa',
        fontSize: 14,
        marginTop: 5,
    },
    subInfoSkeleton: {
        width: "50%",
        height: "20%",
        marginTop: 5,
    },
    imageContainer: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reactions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    reactionText: {
        color: '#fff',
        fontSize: 16,
    },
    descriptionContainer: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    poster: {
        width: 100,
        height: 150,
        marginRight: 20,
    },
    description: {
        width: 100,
        height: 150,
        color: '#fff',
        fontSize: 14,
        flex: 1,
    },
    genreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
    genreButton: {
        backgroundColor: '#444',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    genreText: {
        color: '#fff',
        fontSize: 14,
    },
    genreTextSkeleton: {
        width: "50%",
        height: "20%"
    },
    ratingSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#222',
    },
    ratingItem: {
        alignItems: 'center',
    },
    ratingScore: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingSub: {
        color: '#aaa',
        fontSize: 12,
    },
    rateThis: {
        color: '#0096FF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    metascore: {
        color: '#FFD700',
        fontSize: 16,
        fontWeight: 'bold',
    },
    castSection: {
        padding: 20,
    },
    castSectionSkeleton: {
        width: "100%",
        height: "20%"
    },
    castHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    castTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#0096FF',
        fontSize: 14,
    },
    topBilledCast: {
        color: '#FFD700',
        fontSize: 14,
        marginVertical: 10,
    },
    castItem: {
        marginRight: 15,
        alignItems: 'center',
    },
    castImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    castName: {
        color: '#fff',
        marginTop: 5,
        fontWeight: 'bold',
    },
    castRole: {
        color: '#aaa',
        fontSize: 12,
    },
    directorSection: {
        padding: 20,
    },
    directorTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    directorName: {
        color: '#aaa',
        fontSize: 14,
    },
    imageError: {
        width: 200, // Define the width of the image
        height: 200, // Define the height of the image
    },
    errorText: {
        fontSize: 18,
        color: '#fff', // Red color for error message
        fontWeight: 'bold',
    },
    containerError: {
        flex: 1,
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
        backgroundColor: '#333',
    },
});

export default Detail;




