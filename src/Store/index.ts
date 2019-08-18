import { createConnectedStore, Effects, Store } from "undux";

import { initialUser, IUser } from "./User/Types";

interface State {
    user: IUser;
};
const initialState: State = {
    user: initialUser,
};

export default createConnectedStore(initialState);

export interface StoreProps {
    store: Store<State>;
}
export type StoreEffects = Effects<State>;
