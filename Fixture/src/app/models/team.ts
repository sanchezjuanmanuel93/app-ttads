import { Player } from "./player";

export class Team {
    id: string;
    name: string;
    cod: string;

    players: Player[] = [];

    constructor(team?: any) {
        if (typeof team !== 'undefined' && team !== null) {
            this.deserialize(team);
        }
    }

    private deserialize(team: any): Team {
        (<any>Object).assign(this, team);
        return this;
    }
}
