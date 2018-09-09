import m from 'mithril';

export class User { 
    public list = [];

    constructor() {
        m.request({
            method: "GET",
            url: "http://localhost:3000/users",
        })
        .then((result: any) => {
           this.list = result;
           console.log(result);
        })
        .catch((result: Error) => {
            console.log(result);
        })
    }
}
