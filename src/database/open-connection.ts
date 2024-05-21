import mongoose, { Schema, model, connect } from 'mongoose';
const dbPath = process.env.MONGODB ||"mongodb://127.0.0.1:27017/test";

export async function openConnection() {
    console.log('no connection');
}


function handleError(error: unknown) {
    console.log('error during connect');
}
