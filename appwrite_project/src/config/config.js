const config = {
appWriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
appWriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
appWriteConnectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
appWriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
appWriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKECT_ID)
}

export default config