import { Card } from "../domain/card";
import { CardRepository } from "../domain/card-repository";

export class ValidateCard {
    constructor(private readonly cardRepository: CardRepository) {}

    async getCard(name: string): Promise<Card | null> {
        const card = await this.cardRepository.getByName(name);
        return card;
    }
}