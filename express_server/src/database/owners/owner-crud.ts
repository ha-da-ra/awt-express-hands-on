import { Owner } from "./OwnerModel";
import { IOwner } from "./IOwner";


function createOwner(newOwner: IOwner) {
    Owner.create(newOwner);
}

function updateOwner(name: string, changedOwner: IOwner) {
    Owner.updateOne({ name: name }, changedOwner);
}

function deleteOwner(name: string) {
    Owner.deleteOne({ name: name });
}

export async function getAllOwners() {
    return [{
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
            }
        ]
    }];
    return await Owner.find<IOwner>();
}

