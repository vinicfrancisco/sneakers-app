import { RAPID_API_HOST, RAPID_API_KEY, RAPID_API_URL } from '@env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { format } from 'date-fns'
import { ISneaker } from '~/domain/sneakers'
import {
  GetSneakersDTO,
  SearchSneakersDTO,
  SearchSneakersProps,
  SearchSneakersResponse,
} from './types'

const FOUR_HOURS_IN_SECONDS = 60 * 60 * 4
const SNEAKERS_PER_PAGE = 20

export const sneakersApi = createApi({
  reducerPath: 'sneakersApi',
  keepUnusedDataFor: FOUR_HOURS_IN_SECONDS,
  baseQuery: fetchBaseQuery({
    baseUrl: RAPID_API_URL,
    headers: {
      'X-RapidAPI-Host': RAPID_API_HOST,
      'X-RapidAPI-Key': RAPID_API_KEY,
    },
  }),
  endpoints: (builder) => ({
    getNewReleases: builder.query<ISneaker[], void>({
      query: () => ({
        url: '/sneakers',
        params: {
          sort: 'releaseDate:desc',
          limit: 10,
          releaseDate: `lt:${format(new Date(), 'yyyy-MM-dd')}`,
        },
      }),
      transformResponse: (response: GetSneakersDTO): ISneaker[] => {
        return response.results
      },
    }),
    getUpcomingReleases: builder.query<ISneaker[], void>({
      query: () => ({
        url: '/sneakers',
        params: {
          sort: 'releaseDate:asc',
          limit: 10,
          releaseDate: `gt:${format(new Date(), 'yyyy-MM-dd')}`,
        },
      }),
      transformResponse: (response: GetSneakersDTO): ISneaker[] => {
        return response.results.slice(0, 5)
      },
    }),
    searchSneakers: builder.query<SearchSneakersResponse, SearchSneakersProps>({
      query: ({ page, query }) => ({
        url: '/search',
        params: {
          limit: SNEAKERS_PER_PAGE,
          page: page || 1,
          query,
        },
      }),
      transformResponse: (
        response: SearchSneakersDTO,
        _,
        { page },
      ): SearchSneakersResponse => {
        return {
          totalPages: response.totalPages,
          page: page || 1,
          results: response.results.filter((result) => !!result.image.original),
        }
      },
      serializeQueryArgs: ({ queryArgs }) => `search-${queryArgs.query}}`,
      merge: (currentCache, newItems) => {
        currentCache.page = newItems.page
        currentCache.results.push(...newItems.results)
      },
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg && previousArg) {
          return (
            currentArg.query === previousArg.query &&
            (currentArg?.page || 1) > (previousArg?.page || 1)
          )
        }

        return true
      },
    }),
  }),
})

export const {
  useGetNewReleasesQuery,
  useGetUpcomingReleasesQuery,
  useSearchSneakersQuery,
} = sneakersApi
