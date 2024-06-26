import { Owner } from "./OwnerModel";
import { IOwner } from "./IOwner";


export function addOwner(newOwner: IOwner) {
   return Owner.create(newOwner);
}

export function updateOwner(name: string, changedOwner: IOwner) {
   return Owner.updateOne({ name: name }, changedOwner);
}

export function deleteOwner(name: string) {
    return Owner.deleteOne({ name: name });
}

export function findOwner(name: string) {
    return Owner.findOne({ name: name });
}

export async function createMockOwners() {
    await Owner.deleteMany({});
    const mockOwners = {
        name: "William",
        number: "+123 456 789",
        dogs: [
            {
                name: "Jasmine",
                allergies: "none",
                gender: "female"
            }, {
                name: "Paolo",
                allergies: "fleas",
                gender: "male"
            }, {
                name: "Toby",
                allergies: "none",
                gender: "male"
            }
        ]
    }
    return await Owner.create(mockOwners);
}


export async function getAllOwners() {
    return await Owner.find<IOwner>();
}

