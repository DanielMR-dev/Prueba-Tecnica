export type Person = {
    fullName: string;
    id: string;
    phone: string;
    email: string;
};
export type Vehicle = {
    id: string;         
    plate: string;
    brand: string;
    model: string;
    year: number;
    owner: Person;
    holder: Person;
    driver: Person;
    createdAt: string;
};
  