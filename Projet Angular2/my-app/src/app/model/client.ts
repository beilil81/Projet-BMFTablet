export class Client{

    idClient: number;
    nomClient: string;
    adresse: string;
    email: string;
    tel: string;
    password: string;

    constructor(id : number = 0, 
                nomClient:string = "",
                adresse: string = "",
                email: string = "",
                tel: string = "",
                password: string = ""){ 
        this.idClient = id;
        this.nomClient = nomClient;
        this.adresse = adresse;
        this.email = email;
        this.tel = tel;
        this.password = password;
     } 
} 