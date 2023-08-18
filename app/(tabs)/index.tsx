import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TextInput,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlashList } from '@shopify/flash-list'
import { useDebounce } from 'use-debounce'
import { BOTTOM_TABS_HEIGHT } from '~/components/BottomTabs'
import {
  Input,
  Loading,
  ScrollView,
  Stack,
  VStack,
  Text,
} from '~/components/core'
import Heading from '~/components/core/Heading'
import ShowcaseSneakerCard, {
  CARD_WIDTH,
} from '~/components/ShowcaseSneakerCard'
import SneakerCard from '~/components/SneakerCard'
import UpcomingCard from '~/components/UpcomingCard'
import {
  useGetNewReleasesQuery,
  useGetUpcomingReleasesQuery,
  useSearchSneakersQuery,
} from '~/store/features/sneakers/api'
import theme from '~/assets/theme'
import { ISneaker } from '~/domain/sneakers'

export default function Home() {
  const { bottom, top } = useSafeAreaInsets()

  const [searchInput, setSearchInput] = useState('')
  const [page, setPage] = useState(1)

  const [debouncedSearchInput] = useDebounce(searchInput, 500)

  const inputRef = useRef<TextInput | null>(null)
  const isFetchingNextPage = useRef(false)

  const { data: newReleases } = useGetNewReleasesQuery()
  const { data: upcomingReleases } = useGetUpcomingReleasesQuery()
  const { data: searchData, isFetching: searchLoading } =
    useSearchSneakersQuery({
      query: debouncedSearchInput,
      page,
    })

  const shouldShowSearchResults = !!searchInput.length
  const screenPaddingBottom = BOTTOM_TABS_HEIGHT + bottom + theme.space.medium

  const handleClearInput = () => {
    setSearchInput('')

    inputRef.current?.blur()
  }

  const handleLoadMoreSearchResults = () => {
    if (searchLoading || !searchData) return

    if (page < searchData.totalPages) {
      isFetchingNextPage.current = true

      setPage((prev) => prev + 1)
    }
  }

  const renderSearcItem = useCallback(
    ({ item }: ListRenderItemInfo<ISneaker>) => <SneakerCard data={item} />,
    [],
  )

  useEffect(() => {
    if (!searchLoading) {
      isFetchingNextPage.current = searchLoading
    }
  }, [searchLoading])

  return (
    <Stack
      bg="$white"
      f={1}
      paddingTop={top + theme.space.medium}
      paddingBottom={screenPaddingBottom}
    >
      <VStack mx="$medium" mb="$small">
        <Heading mb="$medium">Search products</Heading>

        <Input
          ref={inputRef}
          iconName="search"
          placeholder='Try "Yeezy boost 350"'
          value={searchInput}
          onChangeText={setSearchInput}
          onClearInput={handleClearInput}
        />
      </VStack>

      <Stack display={shouldShowSearchResults ? 'flex' : 'none'}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchData?.results || []}
          scrollEventThrottle={16}
          onEndReachedThreshold={0.1}
          keyExtractor={(item) => item.id}
          onEndReached={handleLoadMoreSearchResults}
          contentContainerStyle={{
            paddingTop: theme.space.medium,
            paddingHorizontal: theme.space.medium,
            paddingBottom: screenPaddingBottom,
          }}
          renderItem={renderSearcItem}
          ItemSeparatorComponent={() => <Stack h="$medium" />}
          ListEmptyComponent={() =>
            !searchLoading && <Text textAlign="center">No results found</Text>
          }
          ListHeaderComponent={() =>
            searchLoading &&
            !isFetchingNextPage.current && <Loading my="$small" />
          }
          ListFooterComponent={() =>
            searchLoading &&
            isFetchingNextPage.current && <Loading mt="$medium" />
          }
        />
      </Stack>

      <Stack display={shouldShowSearchResults ? 'none' : 'flex'}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: screenPaddingBottom,
          }}
        >
          {!!newReleases && (
            <>
              <Heading mx="$medium" my="$large" color="$gray5" fs="$medium">
                New Releases
              </Heading>

              <FlashList
                horizontal
                showsHorizontalScrollIndicator={false}
                estimatedItemSize={CARD_WIDTH}
                data={newReleases}
                contentContainerStyle={{
                  paddingHorizontal: theme.space.medium,
                }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ShowcaseSneakerCard data={item} />}
                ItemSeparatorComponent={() => <Stack w="$large" />}
              />
            </>
          )}

          {!!upcomingReleases && (
            <Stack px="$medium">
              <Heading color="$gray5" my="$large" fs="$medium">
                Upcoming
              </Heading>

              {upcomingReleases?.map((item, index) => (
                <Fragment key={item.id}>
                  <UpcomingCard data={item} />

                  {index >= 0 && index < upcomingReleases?.length - 1 && (
                    <Stack
                      my="$small"
                      mx="$medium"
                      h={StyleSheet.hairlineWidth}
                      bg="$gray4"
                    />
                  )}
                </Fragment>
              ))}
            </Stack>
          )}
        </ScrollView>
      </Stack>
    </Stack>
  )
}
