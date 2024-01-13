import { Client, Account, Databases } from 'appwrite';


export const PROJECT_ID = '65a16390e12cfb0ba29e'
export const DATABASE_ID = '65a1644e848b3a502d26'
export const COLLECTION_ID_MESSAGES = '65a1645e12eed7545944'

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('65a16390e12cfb0ba29e');
export const account = new Account(client);
export const databases = new Databases(client);

export default client;