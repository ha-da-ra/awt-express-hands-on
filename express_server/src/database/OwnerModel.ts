import { Schema,model } from "mongoose";

const ownerSchema = new Schema<IOwner>({
    name: String,
    number: Number,
    dogs: [{
        name: String,
        allergies: String,
        gender: {
            type: String,
            enum: ['female', 'male']
        }
    }]
});

export const Owner = model<IOwner>('Owner', ownerSchema);
