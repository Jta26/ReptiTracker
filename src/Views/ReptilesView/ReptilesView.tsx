import React, {Fragment} from "react";
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useAuth } from "../../API/Firebase/Auth/Hooks";
import { useNavigation } from "react-navigation-hooks";
import Colors from "../../Helpers/Colors";
import Store from '../../Store';
import { Reptile } from "../../Store/Reptile/Reptile";
import { ReptileCard } from '../../Components/ReptileCard/ReptileCard';
import styles from './Style';

const ReptileView = () => {
    const auth = useAuth();
    const store = Store.useStore();
    const nav = useNavigation();
    const reptileList: Reptile[] = store.get("reptileList");

    const keyExtractor = (item: any, index: any) => item.id;
    const handleSignOut = () => {
        auth.SignOut();
    };
    const handleReptilePress = () => {
        nav.navigate("Reptile");
    };
    const renderReptile: ListRenderItem<Reptile> = ({ item }) => {
        return (
                <ReptileCard img={item.Pictures} name={item.Name} type={item.Type} lastFedDate={item.LastFedDate} onReptilePress={handleReptilePress}/>
        );
    };
    return (
        <FlatList
            data={reptileList}
            renderItem={renderReptile}
            keyExtractor={keyExtractor}
            style={styles.cards}
        />
    );
};
{/* <Icon name='plus' size={30} color={Colors.TextColor}/> */}
ReptileView.navigationOptions = {
    headerTitle: "My Reptiles",
    headerRight: (
        <TouchableOpacity>
            <Icon name='plus' size={30} color={Colors.SecondaryTextColor}/>
        </TouchableOpacity>
    ),
    headerLayoutPreset: "center",
    headerStyle: {
        backgroundColor: Colors.SecondaryColor,
        
    },
    headerTitleStyle: {
        color: Colors.SecondaryTextColor
    }

}

export default ReptileView