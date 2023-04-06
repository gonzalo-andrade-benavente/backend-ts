import { Card } from "./card";

export interface CardRepository {
    getByName(name: string): Promise< Card | null >;
    getById(name: string): Promise< Card | null >;
}