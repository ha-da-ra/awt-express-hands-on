
export interface IOwner {
    name: string;
    number?: number;
    dogs?: IDog[];
  }
  
export interface IDog {
    name: string;
    allergies?: string;
    gender: string;
  }

