export class Player {
    name: String;

    constructor(player?: any) {
        if (typeof player !== 'undefined' && player !== null) {
            this.deserialize(player);
        }
    }

    private deserialize(player: any): Player {
        (<any>Object).assign(this, player);
        return this;
    }
}
