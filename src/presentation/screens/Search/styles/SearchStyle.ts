import { StyleSheet } from "react-native";

export const searchStyle = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom: "10%"
    },
    listContainer: {

        backgroundColor: "white",
        marginTop: "2%",
        paddingBottom: "20%"
    },
    searchBar: {
        height: 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    placeholderText: {
        color: '#888',
    },


    itemContainer: {
        padding: 5,

        flexDirection: 'row',
        margin: "1%",
    },
    image: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

    },

    movieInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingLeft: 10,
        paddingRight: 10,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

    },
    year: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
    },
    title: {
        paddingTop: 5,
        paddingBottom: 5,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',

        overflow: 'visible',
    },
    containerError: {
        height: "100%",
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally,
    },
    errorText: {
        textAlign: "center",
        fontSize: 18,
        color: 'red', // Red color for error message
        fontWeight: 'bold',
    },
    initText: {
        textAlign: "center",
        fontSize: 18,
        color: 'black', // Red color for error message
        fontWeight: 'bold',
    },
    imageError: {
        width: 200, // Define the width of the image
        height: 200, // Define the height of the image
    },
})