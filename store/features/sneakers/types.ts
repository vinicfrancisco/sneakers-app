import { ISneaker } from '~/domain/sneakers'

export interface GetSneakersDTO {
  count: number
  results: ISneaker[]
}

export interface SearchSneakersDTO {
  count: number
  totalPages: number
  results: ISneaker[]
}

export interface SearchSneakersProps {
  query: string
  page?: number
}

export interface SearchSneakersResponse {
  page: number
  totalPages: number
  results: ISneaker[]
}
