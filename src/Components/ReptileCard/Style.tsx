import { StyleSheet, Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native";
import Colors from "../../Helpers/Colors";

interface IStyle {
    container: ViewStyle;
    image: any;
    imageContainer: ViewStyle;
    name: TextStyle;
    type: TextStyle;
}


const windowWidth = Dimensions.get("screen").width;
export default StyleSheet.create<IStyle>({
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: "auto",
        marginRight: "auto",
        overflow: "hidden",
        borderColor: Colors.SecondaryColor,
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        backgroundColor: '#fff',
        width: windowWidth * .9,
        flex: 1,
        flexDirection: "row",

    },
    imageContainer: {
        marginRight: 5,
        width: 75,
        height: 75,
    },
    image: {
        width: null,
        height: null,
        flex: 1,
    },
    name: {
        marginLeft: 3,
        fontSize: 20,
        fontFamily: "Roboto-Regular",
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    type: {
        marginLeft: 3,
        fontSize: 12,
        fontFamily: "Roboto-Regular",
    }
});
