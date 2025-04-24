
export type Person = {
    fullName: string;
    id: string;
    phone: string;
    email: string;
  };
  
  export type Vehicle = {
    plate: string;
    brand: string;
    model: string;
    year: number;
    owner: Person;
    holder: Person;
    driver: Person;
  };
  