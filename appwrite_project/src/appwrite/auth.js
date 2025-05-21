import config from "../config/config";
import {client , Account, ID, Client} from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appWriteProjectId);

        this.account = new Account(this.client)
   
    };
    async createAccount({email,password,name}){
        try{
    const userAccount = await this.account.create(ID.unique(),email,password,name);
       if (userAccount){
        //    return userAccount;
        
        //call another method 
           return this.login({email,password})
       }
       else{
      return 
       }
        }
    catch (error){
        throw error;
        
    }
    }
    async login({email,password}){
        try {
          return  await this.account.create.EmailSession(email,password)
        } catch (error) {
            throw error
        }
    }
async getCurrentUser(){
    try{
return await this.account.get();
    } catch(error){
        console.log("Appwrite sevice :: getCurrentUser :: error", error);
    }
    return null;
}
async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        throw("Appwrite service ::logout :: error",error);
    }
}
}
const authService = new AuthService();
export default AuthService

