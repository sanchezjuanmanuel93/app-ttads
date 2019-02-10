export class Group {
    _id: string;
    name: string;

    teams: any = [];

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
