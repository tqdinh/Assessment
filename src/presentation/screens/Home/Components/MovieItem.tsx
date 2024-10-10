import Movie from "domain/Movie"
import { homeStyle } from "../styles/HomeStyle"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"

const { width, height } = Dimensions.get('window');
const ratioWidth = 0.45; // Example ratio for scaling


export const MovieItemRender = ({ item, onPress }: { item: Movie, onPress: (imdbUrl: string) => void }) => (

  <TouchableOpacity onPress={() => onPress(item.imdbUrl)} style={[homeStyle.itemContainer, { width: width * ratioWidth }]} >

    <Image source={{ uri: item.imgPoster && item.imgPoster.trim().length != 0 ? item.imgPoster : "https://via.placeholder.com/100.png?text=Lewis+Pullman" }} style={[homeStyle.image, { width: width * ratioWidth, height: (width * ratioWidth) / (item.photoWidth / item.photoHeight) }]} />


    <Text style={homeStyle.title} numberOfLines={1} > {item.tilte} </Text>
  </TouchableOpacity>
);
