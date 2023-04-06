import { Card } from "../../card/domain/card";

export class Deck {
    constructor(private title:string, private format:string, private card: Card []) {}
}