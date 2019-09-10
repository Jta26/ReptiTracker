import { createConnectedStore, Effects, Store } from "undux";

import {initialReptileList, IReptile} from "./Reptile/Types";
import { initialUser, IUser } from "./User/Types";
import { Reptile } from "./Reptile/Reptile";

interface State {
    user: IUser;
    reptileList: Reptile[];
}
const initialState: State = {
    user: initialUser,
    reptileList: initialReptileList,
};

export default createConnectedStore(initialState);

export interface StoreProps {
    store: Store<State>;
}
export type StoreEffects = Effects<State>;
