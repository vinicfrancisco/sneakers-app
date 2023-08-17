import { Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlashList } from '@shopify/flash-list'
import { BOTTOM_TABS_HEIGHT } from '~/components/BottomTabs'
import { ScrollView, Stack } from '~/components/core'
import Heading from '~/components/core/Heading'
import HomeHeader from '~/components/HomeHeader'
import SneakerCard, { CARD_WIDTH } from '~/components/SneakerCard'
import UpcomingCard from '~/components/UpcomingCard'
import theme from '~/assets/theme'
import { ISneaker } from '~/domain/sneakers'

const mock: ISneaker[] = [
  {
    id: '37531b92-ecca-4440-8655-c0c9073a4a23',
    brand: 'Jordan',
    colorway: 'Black/Field Purple/Taxi',
    estimatedMarketValue: 90,
    gender: 'preschool',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-12-retro-field-purple-ps',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Jordan 12 Retro Field Purple (PS)',
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 90,
    silhouette: 'Jordan 12 Retro',
    sku: '151186-057',
    story: '',
  },
  {
    id: '435c5bc5-b77e-44f6-bc90-c8f4e1f3186c',
    brand: 'Jordan',
    colorway: 'Black/Field Purple/Taxi',
    estimatedMarketValue: 260,
    gender: 'men',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-12-retro-field-purple',
      goat: 'https://goat.com/sneakers/air-jordan-12-retro-field-purple-ct8013-057',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Jordan 12 Retro Field Purple',
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 200,
    silhouette: 'Air Jordan 12',
    sku: 'CT8013-057',
    story:
      'The Air Jordan 12 Retro ‘Field Purple’ dresses the championship silhouette in OG-inspired two-tone color blocking. Signature stitch detailing enlivens the upper, crafted from tumbled black leather and fortified with violet lizard-textured overlays. In terms of performance, the Phylon midsole packs full-length Zoom Air cushioning for an extra-responsive ride. Underfoot, the rubber outsole features herringbone traction pods and an exposed carbon fiber shank plate for torsional support.',
  },
  {
    id: '44d0be24-a12e-43d1-aa46-9379deef7305',
    brand: 'adidas',
    colorway: 'Sand Beige/Brown/Cream White',
    estimatedMarketValue: 125,
    gender: 'men',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/091/190/306/original/1240798_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/091/190/306/original/1240798_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/091/190/306/original/1240798_00.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/bad-bunny-x-campus-brown-id2529',
      flightClub: 'https://flightclub.com/bad-bunny-x-campus-brown-id2529',
      stadiumGoods: '',
    },
    name: "Bad Bunny x Campus 'Chalky Brown'",
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 160,
    silhouette: 'Campus',
    sku: 'ID2529',
    story:
      'Continuing a creative partnership that began in 2021, the Bad Bunny x adidas Campus ‘Chalky Brown’ delivers the chart-topping recording artist’s distinctive take on the iconic silhouette. The low-top makes use of a brown hairy suede upper, accented with tonal three-stripe branding and equipped with double-tongue construction. Inspired by ocean waves, an evolved rubber mudguard in a cream-colored finish gives way to a durable rubber cupsole, featuring a herringbone traction pattern underfoot.',
  },
  {
    id: '608577bd-9228-4a15-a86e-4ddb98c8feb0',
    brand: 'Nike',
    colorway: 'Multi-Color/Multi-Color',
    estimatedMarketValue: 353,
    gender: 'men',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/091/232/154/original/1240799_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/091/232/154/original/1240799_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/091/232/154/original/1240799_00.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/clot-x-dunk-low-sp-what-the-fn0316-999',
      flightClub:
        'https://flightclub.com/clot-x-dunk-low-sp-what-the-fn0316-999',
      stadiumGoods: '',
    },
    name: "CLOT x Dunk Low SP 'What The'",
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 120,
    silhouette: 'Dunk',
    sku: 'FN0316-999',
    story:
      'Celebrating the 20th anniversary of the Hong Kong streetwear brand, the CLOT x Nike Dunk Low SP ‘What The’ delivers a mashup colorway inspired by past Nike and Jordan collaborations. Contrasting warm and cool palettes are executed on each mismatched shoe, featuring a familiar assemblage of materials and details. They include the clear toe box of the Air Max 1 ‘Kiss of Death’ from 2006, the embossed suede paneling of the Terracotta Warriors-inspired Air Jordan 13 Low from 2018, and textile overlays finished in CLOT’s iconic Silk Royale pattern, borrowed from the partner brands’ series of Air Force 1s. Special 20th anniversary branding appears on the custom sockliner of the left shoe.',
  },
  {
    id: '7dbaac6f-0edc-4002-8250-54a87e34ea3d',
    brand: 'Jordan',
    colorway: 'Light Orewood Brown/Metallic Gold/Light British Tan/Palomino',
    estimatedMarketValue: 77,
    gender: 'infant',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/091/313/526/original/1247667_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/091/313/526/original/1247667_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/091/313/526/original/1247667_00.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-3-retro-td-palomino-dm0968-102',
      flightClub:
        'https://flightclub.com/air-jordan-3-retro-td-palomino-dm0968-102',
      stadiumGoods: '',
    },
    name: "Air Jordan 3 Retro TD 'Palomino'",
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 85,
    silhouette: 'Air Jordan 3',
    sku: 'DM0968-102',
    story: '',
  },
  {
    id: '80262ef1-a9c9-46e8-b8fd-ce12313de0cb',
    brand: 'Jordan',
    colorway: 'Light Orewood Brown/Metallic Gold/Light British Tan/Palomino',
    estimatedMarketValue: 97,
    gender: 'youth',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/090/916/747/original/DM0966_102.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/090/916/747/original/DM0966_102.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/090/916/747/original/DM0966_102.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-3-retro-ps-palomino-dm0966-102',
      flightClub:
        'https://flightclub.com/air-jordan-3-retro-ps-palomino-dm0966-102',
      stadiumGoods: '',
    },
    name: "Air Jordan 3 Retro PS 'Palomino'",
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 100,
    silhouette: 'Air Jordan 3',
    sku: 'DM0966-102',
    story: '',
  },
  {
    id: '85165837-9062-4efd-ac1f-914ea861783d',
    brand: 'Jordan',
    colorway: 'Black/Field Purple/Taxi',
    estimatedMarketValue: 75,
    gender: 'toddler',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-12-retro-field-purple-td',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Jordan 12 Retro Field Purple (TD)',
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 75,
    silhouette: 'Jordan 12 Retro',
    sku: '850000-057',
    story: '',
  },
  {
    id: '88dd74a3-fe43-49de-8540-f60275ac3d52',
    brand: 'Jordan',
    colorway:
      'Light Orewood Brown/Metallic Gold/Light British Tan/Palomino/Hemp',
    estimatedMarketValue: 151,
    gender: 'youth',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/090/620/010/original/1235961_00.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/090/620/010/original/1235961_00.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/090/620/010/original/1235961_00.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/air-jordan-3-retro-gs-palomino-dm0967-102',
      flightClub:
        'https://flightclub.com/air-jordan-3-retro-gs-palomino-dm0967-102',
      stadiumGoods: '',
    },
    name: "Air Jordan 3 Retro GS 'Palomino'",
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Air Jordan 3',
    sku: 'DM0967-102',
    story:
      'Made for big kids, the Air Jordan 3 Retro GS ‘Palomino’ updates the classic silhouette with neutral earth tones and refreshed materials. In lieu of a traditional leather build, the upper is crafted from sand-colored suede with dark tan elephant print overlays at the forefoot and heel. Jumpman branding hits adorn the tongue and molded heel tab in a metallic gold finish. The sneaker rides on an off-white foam midsole, featuring visible Air-sole cushioning and a splash of brown along the heel. A grey rubber outsole yields durable traction underfoot.',
  },
  {
    id: 'bac4bc1a-548f-47a2-9065-d97ca0234c40',
    brand: 'Jordan',
    colorway: 'Black/Field Purple/Taxi',
    estimatedMarketValue: 150,
    gender: 'child',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/091/255/587/original/CT8013_057.png.png',
    },
    links: {
      stockX: 'https://stockx.com/air-jordan-12-retro-field-purple-gs',
      goat: '',
      flightClub: '',
      stadiumGoods: '',
    },
    name: 'Jordan 12 Retro Field Purple (GS)',
    releaseDate: '2023-07-29',
    releaseYear: '2023',
    retailPrice: 150,
    silhouette: 'Jordan 12 Retro',
    sku: '153265-057',
    story: '',
  },
  {
    id: '1187d690-0ed2-485c-9226-a7d358b31166',
    brand: 'New Balance',
    colorway: 'Brown/Green/Purple',
    estimatedMarketValue: 317,
    gender: 'men',
    image: {
      '360': [],
      original:
        'https://image.goat.com/attachments/product_template_pictures/images/090/948/429/original/MSRCXTD.png.png',
      small:
        'https://image.goat.com/750/attachments/product_template_pictures/images/090/948/429/original/MSRCXTD.png.png',
      thumbnail:
        'https://image.goat.com/375/attachments/product_template_pictures/images/090/948/429/original/MSRCXTD.png.png',
    },
    links: {
      stockX: '',
      goat: 'https://goat.com/sneakers/stone-island-x-tokyo-design-studio-x-fuelcell-c_1-brown-msrcxtd',
      flightClub:
        'https://flightclub.com/stone-island-x-tokyo-design-studio-x-fuelcell-c_1-brown-msrcxtd',
      stadiumGoods: '',
    },
    name: "Stone Island x Tokyo Design Studio x FuelCell C_1 'Brown'",
    releaseDate: '2023-07-28',
    releaseYear: '2023',
    retailPrice: 250,
    silhouette: 'FuelCell C_1',
    sku: 'MSRCXTD',
    story: '',
  },
]

export default function Home() {
  const { bottom, top } = useSafeAreaInsets()

  return (
    <ScrollView
      bg="$white"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingBottom: BOTTOM_TABS_HEIGHT + bottom + theme.space.medium,
        paddingTop: top + theme.space.medium,
      }}
    >
      <HomeHeader />

      <Heading mx="$medium" my="$large" color="$gray5" fs="$medium">
        New Releases
      </Heading>

      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Stack w="$large" />}
        estimatedItemSize={CARD_WIDTH}
        data={mock}
        contentContainerStyle={{
          paddingHorizontal: theme.space.small,
        }}
        renderItem={({ item }) => <SneakerCard data={item} />}
      />

      <Stack px="$medium">
        <Heading color="$gray5" my="$large" fs="$medium">
          Upcoming
        </Heading>

        {mock.slice(0, 5).map((item, index) => (
          <Fragment key={item.id}>
            <UpcomingCard data={item} />

            {index >= 0 && index < mock.slice(0, 5).length - 1 && (
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
    </ScrollView>
  )
}
