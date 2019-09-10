import { StyleSheet, Dimensions } from "react-native";

interface IStyle {
    container: any;
    image: any;
}

const windowWidth = Dimensions.get("window").width;
export default StyleSheet.create<IStyle>({
    container: {
        flex: 1,
        flexDirection: "row",
        width: null,

    },
    image: {
        width: null,
        height: 275,
    },
});
