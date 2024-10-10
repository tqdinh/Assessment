import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    listContainer: {
        alignItems: "center",

        marginTop: "2%",
        paddingBottom: "20%"
    },

    icon: {
        marginRight: 10, // Add space between icon and TextInput
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,

        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,

    },
    placeholderText: {
        color: '#888',
    },


    itemContainer: {

        // backgroundColor: "red",
        alignItems: 'center',
        margin: "1%",
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10


    },
    title: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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