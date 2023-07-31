export interface ISneakerImages {
  '360': string[]
  original: string
  small: string
  thumbnail: string
}

export interface ISneakerLinks {
  stockX: string
  goat: string
  flightClub: string
  stadiumGoods: string
}

export interface ISneaker {
  id: string
  brand: string
  colorway: string
  estimatedMarketValue: number
  gender: string
  image: ISneakerImages
  links: ISneakerLinks
  name: string
  releaseDate: string
  releaseYear: string
  retailPrice: number
  silhouette: string
  sku: string
  story: string
}
