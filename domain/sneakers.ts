export interface ILowestResellPrice {
  stockX: number
  flightClub?: number
  goat?: number
}

export interface IResellLinks {
  stockX: string
  flightClub?: string
  goat?: string
}

export interface ISneaker {
  lowestResellPrice: ILowestResellPrice
  imageLinks: any[]
  _id: string
  shoeName: string
  brand: string
  silhoutte: string
  styleID: string
  make: string
  colorway: string
  retailPrice: number
  thumbnail: string
  releaseDate: string
  description: string
  urlKey: string
  resellLinks: IResellLinks
  goatProductId?: number
}
