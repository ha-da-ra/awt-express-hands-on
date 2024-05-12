
export interface IOwner {
    name: string;
    number?: string;
    dogs?: IDog[];
  }
  
export interface IDog {
    name: string;
    allergies?: string;
    gender: string;
  }

