export interface IUser {
    uid: string | null;
    email: string | null;
}

export let initialUser: IUser = {
    uid: null,
    email: null,
};
