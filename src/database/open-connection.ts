import mongoose, { Schema, model, connect } from 'mongoose';
const dbPath = process.env.MONGODB ||"mongodb://127.0.0.1:27017/test";

export async function openConnection() {
    try {
        await connect(dbPath);
        console.log('connected');
    } catch (error) {
        handleError(error);
    }
}


function handleError(error: unknown) {
    console.log('error during connect');
}
