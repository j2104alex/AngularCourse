export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Jessica",
};

const passenger2: Passenger = {
  name: "Alexandra",
  children: ["Alexander,Cristian"],
};

const printChildren = (passenger: Passenger) => {
  // Estoy diciendo con ! que siempre voy a recibir un dato que no va a ser nulo
  //const howManyChildren = passenger.children!.length;
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);
};

printChildren(passenger2);
