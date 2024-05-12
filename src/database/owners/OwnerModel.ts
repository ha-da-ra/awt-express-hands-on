import { Schema,model } from "mongoose";
import { IOwner } from "./IOwner";

const ownerSchema = new Schema<IOwner>({
    name: String,
    number: String,
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
