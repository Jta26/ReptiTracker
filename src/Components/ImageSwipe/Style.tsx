import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../Helpers/Colors";

interface IStyle {
    container: any;
    image: any;
    imgCount: any;
}
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
    imgCount: {
        color: Colors.SecondaryTextColor,
        textAlign: "right",
        padding: 5,
    }
});
