export interface ILogin{
    username: string, 
    password: string
}
export class Login implements ILogin{
    constructor(){
        
    }
    username: string;
    password: string;
    
}