import { Owner } from "./OwnerModel";


function createOwner(newOwner: IOwner){
    Owner.create(newOwner);
}

function updateOwner(name: string, changedOwner: IOwner){
    Owner.updateOne({name: name}, changedOwner);
}

function deleteOwner(name: string){
    Owner.deleteOne({name: name});
}
