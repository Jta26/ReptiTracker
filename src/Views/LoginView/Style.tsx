import { StyleSheet, TextStyle, ViewStyle, StyleProp, Dimensions } from "react-native";
import Colors from '../../Helpers/Colors';

interface Style {
    container: any;
    button: any;
    input: any;
    title: any;
    titleImage: any;
    buttonText: any;
    error: any;
}
const { width, height} = Dimensions.get('window');
export default StyleSheet.create<Style>({
    container: {
        padding: 20,
        flex:1,
        flexDirection: 'column',
        
        alignContent: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
    titleImage: {
        width: width * .50,
        height: width * .50,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    input: {
        borderWidth: 1,
        borderColor: Colors.TextColor,
        borderRadius: 20,
        padding: 10,
        margin: 10,
        backgroundColor: Colors.PrimaryColor,
        color: Colors.SecondaryTextColor,

    },
    button: {
    
        padding: 10,
        backgroundColor: Colors.PrimaryColor,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: Colors.AccentColor,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 24,
    },
    buttonText: {
        color: Colors.SecondaryTextColor,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 15,
        
    },
    error: {
        textAlign: 'left',
        height: 40,
        marginLeft: 'auto',
        marginRight: 'auto', 
        color: Colors.ErrorColor
    },
});
