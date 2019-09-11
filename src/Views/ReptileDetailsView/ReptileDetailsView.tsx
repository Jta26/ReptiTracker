import React, { Fragment } from 'react';

import { Text, View, ActivityIndicator } from 'react-native';

import Store from "../../Store";
import { Reptile } from '../../Store/Reptile/Reptile';
import { ImageSwipe, ReptileDetails } from '../../Components';


const ReptileDetailsView = () => {
    const store = Store.useStore();
    const reptile: Reptile | null = store.get("selectedReptile");
    
    return (
        <View>
            <ReptileDetails reptile={reptile}/>
        </View>
    );
}


export default ReptileDetailsView;