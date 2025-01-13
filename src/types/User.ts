export interface User {
  id: number,
  name: string,
  username: null | string,
  email: string,
  phone: null | string,
  website: null | string,
  createdAt: string,
  updatedAt: string,
  address?: {
    id: number,
    userId: number,
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    createdAr: string,
    updatedAt: string,
  }
}