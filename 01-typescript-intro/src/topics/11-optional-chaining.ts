export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Jessica"
}

const passenger2: Passenger = {
    name:'Alexandra',
    children:['Alexander,Cristian']
}

const printChildren = (passenger:Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name,howManyChildren);
}

printChildren(passenger2);

const returnChildrenNumber = (passenger:Passenger):number => {
    // Estoy diciendo con ! que siempre voy a recibir un dato que no va a ser nulo
    const howManyChildren = passenger.children!.length;
    console.log(passenger.name,howManyChildren);

    return returnChildrenNumber(passenger2);
}

returnChildrenNumber(passenger2);