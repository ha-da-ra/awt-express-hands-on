import mongoose, { Schema, model, connect } from 'mongoose';

async function openConnection() {
    try {
        await connect('mongodb://127.0.0.1:27017/test');
        mongoose.connection.on('disconnected', () => console.log('disconnected'));
    } catch (error) {
        handleError(error);
    }
}


function handleError(error: unknown) {
    //TODO: do some error handling
}
