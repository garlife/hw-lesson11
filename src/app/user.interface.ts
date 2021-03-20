export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    nameNick?: string;
    addressname?: string; 
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    }
}

export type Users = User[];