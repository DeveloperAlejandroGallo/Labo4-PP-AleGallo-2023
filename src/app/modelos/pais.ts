export interface Pais {
  name: Name;
  flags: Flag;
  capital: string;
  region: string;
  independent: boolean,
  population: number
}

export interface Name {
  common: string;
}

export interface Flag {
  png: string;
}
