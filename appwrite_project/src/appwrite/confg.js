import config from "../config/config";
import {client,ID, Databases , Storage , Query} from "appwrite"
export class Service{
client = new client();
Databases;
Storage;
bucket;
constructor(){
    this.client
    .setEndpoint(config.appWriteUrl)
    .setProject(config.appWriteProjectId)
    .this.Databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
}
async createPost({title,slug,content,featuredImage,status,userId}){
    try {
        return await this.Databases.createDocument(
            config.appWriteDatabaseId,
        config.appWriteConnectionId,
        slug,
        {
            title,
            content,
            featuredImage,
            status, 
            userId,
        }
        )
    } catch (error) {
        // throw(error)
        console.log("Appwrite sevice :: createPost :: error",error);
    }
}
async deletePost(slug){
    try {
        await this.Databases.deleteDocument(
            config.appWriteDatabaseId,
            config.appWriteConnectionId,
            slug
        )
        return true
    } catch (error) {
        // throw(error)
        console.log("Appwrite serive :: deletePost :: error",error);
        return false
    }
}
async getPost(slug){
    try {
        return await
         this.Databases.getDocument(
            config.appWriteDatabaseId,
            config.appWriteConnectionId,
            slug
         )
    } catch (error) {
        // throw(error)
        console.log("Appwrite serive :: getPost :: error", post);
        return false
    }
}
async getPosts(queries = [Query.equal("status","active")]){
try {
    return await this.Databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteConnectionId,
        queries,
        100,
        0,
        // [Query.equal("status","active")]
    )
    
} catch (error) {
    console.log("Appwrite serive :: getPosts :: error",error);
    return false
}
}
//file upload service
async uploadFile(file){
    try {
        return await this.bucket.createFile(
            config.appWriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite serive :: uploadFile :: error",error);
        return false
    }
}
async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            config.appWriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("AppWrite serive :: deleteFile :: error",error);
        return false
    }
}
getFilePreview(fileId){
return this.bucket.getFilePreview(
    config.appWriteBucketId,
    fileId
)
}
}
const service = new Service();
export default Service;