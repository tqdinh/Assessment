import Movie from "domain/Movie"

import { Dimensions, Image, Text, Touchable, TouchableOpacity, View } from "react-native"
import { searchStyle } from "../styles/SearchStyle";

const { width } = Dimensions.get('window');
const ratioWidth = 0.4;

export const SearchMovieItemRender = ({ item, onPress }: { item: Movie, onPress: (imdbUrl: string) => void }) => (
  <TouchableOpacity onPress={() => onPress(item.imdbUrl)} style={[searchStyle.itemContainer]} >
    <Image source={{ uri: item.imgPoster && item.imgPoster.trim().length != 0 ? item.imgPoster : "https://via.placeholder.com/100.png?text=Lewis+Pullman" }} style={[searchStyle.image, { width: width * ratioWidth, height: (width * ratioWidth) / (item.photoWidth / item.photoHeight) }]} />
    <View style={searchStyle.movieInfo}>
      <Text style={searchStyle.title} numberOfLines={1} > {item.tilte} </Text>
      <Text style={searchStyle.year} numberOfLines={1} > {item.year} </Text>
    </View>
  </TouchableOpacity>
);
