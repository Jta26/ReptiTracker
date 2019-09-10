
import { Image } from "react-native";
import { IReptile, ReptileType } from "./Types";

export class Reptile implements IReptile {
    private id: string;
    private name: string;
    private type: ReptileType;
    private pictures: string[];
    private feedInterval: number;
    private lastFedDate: Date;
    constructor(id: number, name: string, type: ReptileType, pictures: string[] = [], feedInterval: number, lastFedDate: Date) {
        this.id = String(id);
        this.name = name;
        this.type = type;
        this.pictures = pictures;
        this.feedInterval = feedInterval;
        this.lastFedDate = lastFedDate;
    }
    get ID(): string {
        return this.id;
    }
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.name = value;
    }
    get Type(): ReptileType {
        return this.type;
    }
    set Type(value: ReptileType) {
        this.type = value;
    }
    get Pictures(): string[] {
        return this.pictures;
    }
    public AddPicture(img: string) {
        this.pictures.push(img);
    }
    // TODO Remove Picture
    get FeedInterval(): number {
        return this.feedInterval;
    }
    set FeedInterval(value: number) {
        this.feedInterval = value;
    }
    get LastFedDate(): Date {
        return this.lastFedDate;
    }
    set LastFedDate(value: Date) {
        this.lastFedDate = value;
    }

    // Other functions that reptiles do.
}
