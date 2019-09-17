import React, { useState, Fragment } from "react";
import {
    Image,
    View,
    Text,
    Animated,
    PanResponder,
    Dimensions,
    Easing,
} from "react-native";
import styles from "./Style";

interface IImageSwipeProps {
    images: string[];
    imgWidth: number;
}

const ImageSwipe = (props: IImageSwipeProps) => {
    const SwipeDuration: number = 200;
    const windowWidth: number = props.imgWidth;
    const SwipeThreshold: number = 0.25 * windowWidth;
    const [imgIndex, setImgIndex] = useState(0);
    const position: Animated.ValueXY = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            // set position
            position.stopAnimation();
            position.setValue({ x: imgIndex * -windowWidth + gesture.dx, y: 0});

        },
        onPanResponderRelease: (event, gesture) => {
            if (gesture.dx < -SwipeThreshold && imgIndex < props.images.length - 1) {
                swipeImage("left");
            }
            else if (gesture.dx > SwipeThreshold && imgIndex > 0) {
                swipeImage("right");
            }
            else {
                resetImagePos();
            }
        },
    });
    const swipeImage = (direction: string) => {
        if (direction === "left") {
            Animated.timing(position, {
                toValue: {x: (imgIndex + 1) * -windowWidth , y: 0},
                duration: SwipeDuration,
                easing: Easing.ease,
            }).start(() => {
                setImgIndex(imgIndex + 1);
            });
        }
        else if (direction === "right") {
            Animated.timing(position, {
                toValue: {x: (imgIndex - 1) * -windowWidth, y: 0},
                duration: SwipeDuration,
                easing: Easing.ease,
            }).start(() => {
                setImgIndex(imgIndex - 1);
            });
        }
    };
    const resetImagePos = () => {
        Animated.spring(position, {
            toValue: {x: imgIndex * -windowWidth, y: 0},
        }).start();
    };

    const renderImg = (image: string, index: number) => {
        return (
            <Image key={index} source={{uri: image}} style={[styles.image, {width: props.imgWidth}]} resizeMode="cover" />
        );
    }
    return (
        <Fragment>
            <Animated.View style={[position.getLayout(), styles.container]} {...panResponder.panHandlers}>
                {props.images.map(renderImg)}
            </Animated.View>
            <Text style={styles.imgCount}>{imgIndex + 1} / {props.images.length}</Text>
        </Fragment>
    );
};

export default ImageSwipe;
