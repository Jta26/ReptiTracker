import firebase from "react-native-firebase";
import { StoreEffects } from "../../../Store/";
import { IUser } from "../../../Store/User/Types";


export const SignInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        return user.user;
    } catch (err) {
        throw new Error(err.message);
    }
};