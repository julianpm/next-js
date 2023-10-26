import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
	const client = await MongoClient.connect('mongodb+srv://jmeanchoff:NeCgz4Z7mZMy@cluster0.w7gw7jx.mongodb.net/auth-demo?retryWrites=true&w=majority');
	return client;
}
