import React, { Fragment } from "react";
import { Text } from "react-native";

import { Reptile } from "../../Store/Reptile/Reptile";
import { ImageSwipe } from "../index";

interface IReptileDetails {
    reptile: Reptile | null;
}

const ReptileDetails = (props: IReptileDetails) => {
    if (props.reptile !== null) {
        return (
            <Fragment>
                <ImageSwipe images={props.reptile.Pictures} imgWidth={500}/>
                <Text>{props.reptile.Name}</Text>
                <Text>{props.reptile.Type}</Text>
                <Text>{props.reptile.LastFedDate.toISOString()}</Text>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <Text>Test</Text>
            </Fragment>
        );
    }
}

export default ReptileDetails;
