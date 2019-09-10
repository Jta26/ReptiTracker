import { Image } from "react-native";
import { Reptile } from "./Reptile";

export enum ReptileType {
    Snake = "Snake",
    Lizard = "Lizard",
    Chameleon = "Chameleon",
    Turtle = "Turtle",
    Tortoise = "Tortoise",
}

export interface IReptile {
    ID: string;
    Name: string;
    Type: ReptileType;
    Pictures: string[];
    FeedInterval: number;
    LastFedDate: Date;
}

export let initialReptileList = [
    new Reptile(0, "Jim", ReptileType.Snake, ["https://picsum.photos/2500/1500", "https://picsum.photos/1600", "https://picsum.photos/1920", "https://picsum.photos/400"], 7, new Date()),
    new Reptile(1, "Merlin", ReptileType.Chameleon, ["https://picsum.photos/500", "https://picsum.photos/200", "https://picsum.photos/300", "https://picsum.photos/400"], 1, new Date()),
    new Reptile(2, "Craig", ReptileType.Snake, ["https://picsum.photos/500", "https://picsum.photos/200", "https://picsum.photos/300", "https://picsum.photos/400"], 7, new Date()),
    new Reptile(3, "Lucky", ReptileType.Tortoise, ["https://picsum.photos/500", "https://picsum.photos/200", "https://picsum.photos/300", "https://picsum.photos/400"], 2, new Date()),
];
