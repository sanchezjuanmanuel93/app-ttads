export class Group {
    id: string;
    name: string;

    teams: any = [];
    matches: any = [];

    constructor(group?: any) {
        if (typeof group !== 'undefined' && group !== null) {
            this.deserialize(group);
        }
    }

    private deserialize(group: any): Group {
        (<any>Object).assign(this, group);
        return this;
    }
}
