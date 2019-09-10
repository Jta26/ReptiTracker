import { StyleSheet, Dimensions } from "react-native";

interface IStyle {
    cards: any;
}
const windowWidth = Dimensions.get("screen").width;
export default StyleSheet.create<IStyle>({
    cards: {
        flex: 1,
    }
});
