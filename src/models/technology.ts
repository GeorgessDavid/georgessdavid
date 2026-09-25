interface ITechnology {
    name: string;
    logoPath: string;
    main: boolean;
}

export class Technology implements ITechnology{
    name: string;
    logoPath: string;
    main: boolean;

    constructor(name: string, logoPath: string, main: boolean){
        this.name = name;
        this.logoPath = '/tech/' + logoPath;
        this.main = main;
    }
}