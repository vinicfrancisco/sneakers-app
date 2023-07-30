import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlashList } from '@shopify/flash-list'
import { ScrollView, Stack, YStack, getTokens } from 'tamagui'
import Heading from '~/components/basic/Heading'
import Input from '~/components/basic/Input'
import { BOTTOM_TABS_HEIGHT } from '~/components/BottomTabs'
import SneakerCard from '~/components/SneakerCard'
import { ISneaker } from '~/domain/sneakers'

const mostPopular: ISneaker[] = [
  {
    lowestResellPrice: {
      stockX: 210,
      flightClub: 199,
      goat: 199,
    },
    imageLinks: [],
    _id: '64c6ad16b15f76bd4974964c',
    shoeName: 'Jordan 1 Retro High OG UNC Toe',
    brand: 'Jordan',
    silhoutte: 'Jordan 1 Retro High OG',
    styleID: 'DZ5485-400',
    make: 'Jordan 1 Retro High OG',
    colorway: 'University Blue/Black/White',
    retailPrice: 180,
    thumbnail:
      'https://images.stockx.com/images/Air-Jordan-1-High-OG-UNC-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1688675280',
    releaseDate: '2023-07-22',
    description:
      'The Air Jordan 1 Retro High OG ‘UNC Toe’ pays homage to Michael Jordan’s college with a color scheme that recalls the 2018 ‘Bred Toe’ AJ1 release. The shoe features white quarter panels and black overlays on the Swoosh and forefoot against an all-leather base. The toe box, heel, and collar flap are adorned with University Blue accents, with a lateral-side classic Wings logo. The breathable nylon tongue has a retro Nike tag, and lightweight cushioning is provided by a white rubber midsole with an Air-sole heel unit within a polyurethane wedge. Underfoot, sturdy traction is ensured by the blue rubber outsole.',
    urlKey: 'air-jordan-1-high-og-unc-toe',
    resellLinks: {
      stockX: 'https://stockx.com/air-jordan-1-high-og-unc-toe',
      flightClub:
        'https://www.flightclub.com/air-jordan-1-retro-high-og-unc-toe-dz5485-400',
      goat: 'http://www.goat.com/sneakers/air-jordan-1-retro-high-og-unc-toe-dz5485-400',
    },
    goatProductId: 1145907,
  },
  {
    lowestResellPrice: {
      stockX: 178,
      flightClub: 167,
      goat: 167,
    },
    imageLinks: [],
    _id: '64c6ad16b15f76be8c74964d',
    shoeName: 'Jordan 3 Retro Palomino',
    brand: 'Jordan',
    silhoutte: 'Jordan 3 Retro',
    styleID: 'CT8532-102',
    make: 'Jordan 3 Retro',
    colorway: 'Light Orewood Brown/Metallic Gold/Light British Tan/Palomino',
    retailPrice: 200,
    thumbnail:
      'https://images.stockx.com/images/Air-Jordan-3-Retro-Palomino-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1689877240',
    releaseDate: '2023-07-29',
    description:
      "The Air Jordan 3 Retro 'Palomino' revamps the classic silhouette with a rustic vibe, accentuated by subtle earthy hues. The off-white suede upper is adorned with elephant-print overlays in brown on the forefoot and heel, with the distinctive pattern repeated on the eyestay. The padded collar features a perforated nubuck in tan, while the tongue and molded heel tab sport the iconic Jumpman logo. A sturdy grey rubber outsole provides support beneath a vintage-finished PU midsole with an exposed Air-sole unit in the heel.",
    urlKey: 'air-jordan-3-retro-palomino',
    resellLinks: {
      stockX: 'https://stockx.com/air-jordan-3-retro-palomino',
      flightClub:
        'https://www.flightclub.com/air-jordan-3-retro-palomino-ct8532-102',
      goat: 'http://www.goat.com/sneakers/air-jordan-3-retro-palomino-ct8532-102',
    },
    goatProductId: 1163346,
  },
  {
    lowestResellPrice: {
      stockX: 130,
      flightClub: 119,
      goat: 119,
    },
    imageLinks: [],
    _id: '64c6ad16b15f763d3c74964e',
    shoeName: 'adidas Yeezy Slide Bone (2022/2023 Restock)',
    brand: 'adidas',
    silhoutte: 'adidas Yeezy Slide',
    styleID: 'FZ5897',
    make: 'adidas Yeezy Slide',
    colorway: 'Bone/Bone/Bone',
    retailPrice: 60,
    thumbnail:
      'https://images.stockx.com/images/adidas-Yeezy-Slide-Bone-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1660143189',
    releaseDate: '2023-08-03',
    description:
      "First released in 2019, the 2022 release of the Yeezy Slide 'Bone' brings back a neutral colorway of the minimalist sandal. A light ivory color permeates the one-piece slide, manufactured from injection-molded EVA for lightweight durability. The outsole features a set of grooves for traction, while a small adidas logo can be found on the footbed.",
    urlKey: 'adidas-yeezy-slide-bone-2022',
    resellLinks: {
      stockX: 'https://stockx.com/adidas-yeezy-slide-bone-2022',
      flightClub:
        'https://www.flightclub.com/yeezy-slides-bone-2022-re-release-fz5897',
      goat: 'http://www.goat.com/sneakers/yeezy-slides-bone-2022-re-release-fz5897',
    },
    goatProductId: 952291,
  },
  {
    lowestResellPrice: {
      stockX: 176,
    },
    imageLinks: [],
    _id: '64c6ad16b15f76f46374964f',
    shoeName: 'Nike x NOCTA Tech Fleece Hoodie Black',
    brand: 'Nike',
    silhoutte: 'Nike x NOCTA Tech Fleece',
    styleID: 'FD8453-010',
    make: 'Nike x NOCTA Tech Fleece',
    colorway: 'Black',
    retailPrice: 145,
    thumbnail:
      'https://images.stockx.com/images/Nike-x-NOCTA-Tech-Fleece-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1690217467',
    releaseDate: '2023-07-27',
    description: '',
    urlKey: 'nike-x-nocta-tech-fleece-hoodie-black',
    resellLinks: {
      stockX: 'https://stockx.com/nike-x-nocta-tech-fleece-hoodie-black',
      goat: 'http://www.goat.com/sneakers/nike-x-nocta-tech-fleece-zip-hoodie-black-fd8453-010',
    },
    goatProductId: 1255178,
  },
  {
    lowestResellPrice: {
      stockX: 378,
      flightClub: 323,
      goat: 323,
    },
    imageLinks: [],
    _id: '64c6ad16b15f766041749650',
    shoeName: 'Nike Dunk Low SP What The CLOT',
    brand: 'Nike',
    silhoutte: 'Nike Dunk Low SP',
    styleID: 'FN0316-999',
    make: 'Nike Dunk Low SP',
    colorway: 'Multi-Color/Multi-Color',
    retailPrice: 120,
    thumbnail:
      'https://images.stockx.com/images/Nike-Dunk-Low-SP-What-The-CLOT-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1690205008',
    releaseDate: '2023-07-29',
    description:
      "The CLOT x Nike Dunk Low SP 'What The' draws inspiration from past Nike and Jordan collaborations to honor the Hong Kong streetwear brand's 20th anniversary. Various materials and design elements combine with warm and cool palettes in this special mashup: the clear toe box from the Air Max 1 'Kiss of Death' (2006); the Terracotta Warriors-inspired Air Jordan 13 Low’s (2018) embossed suede paneling, and the iconic Silk Royale pattern from CLOT's Air Force 1 series. Within the left shoe, custom 20th-anniversary branding is revealed on the sockliner.",
    urlKey: 'nike-dunk-low-sp-what-the-clot',
    resellLinks: {
      stockX: 'https://stockx.com/nike-dunk-low-sp-what-the-clot',
      flightClub:
        'https://www.flightclub.com/clot-x-dunk-low-sp-what-the-fn0316-999',
      goat: 'http://www.goat.com/sneakers/clot-x-dunk-low-sp-what-the-fn0316-999',
    },
    goatProductId: 1240799,
  },
  {
    lowestResellPrice: {
      stockX: 818,
      flightClub: 720,
      goat: 720,
    },
    imageLinks: [],
    _id: '64c6ad16b15f769dea749651',
    shoeName: 'Jordan 1 Retro Low OG SP Travis Scott Reverse Mocha',
    brand: 'Jordan',
    silhoutte: 'Jordan 1 Retro Low OG SP',
    styleID: 'DM7866-162',
    make: 'Jordan 1 Retro Low OG SP',
    colorway: 'Sail/University Red-Ridgerock',
    retailPrice: 150,
    thumbnail:
      'https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Reverse-Mocha_V2-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1659033979',
    releaseDate: '2022-07-21',
    description:
      "Giving a remix on the original 'Mocha' AJ1 from 2019 is the Travis Scott x Air Jordan 1 Low from 2019. The upper features a brown suede base with ivory leather overlays and Scott's signature reverse Swoosh on the lateral side with oversized dimensions and a neutral cream finish. Contrasting scarlet accents distinguish a pair of woven Nike Air tongue tags and mismatched heel tabs with a Cactus Jack and retro Wings logos embroidered. It's built on an off-white rubber midsole with encapsulated Nike Air cushioning in the heel and a brown rubber outsole underfoot.",
    urlKey: 'air-jordan-1-retro-low-og-sp-travis-scott-reverse-mocha',
    resellLinks: {
      stockX:
        'https://stockx.com/air-jordan-1-retro-low-og-sp-travis-scott-reverse-mocha',
      flightClub:
        'https://www.flightclub.com/travis-scott-x-air-jordan-1-low-og-reverse-mocha-dm7866-162',
      goat: 'http://www.goat.com/sneakers/travis-scott-x-air-jordan-1-low-og-reverse-mocha-dm7866-162',
    },
    goatProductId: 854208,
  },
]

const jordans: ISneaker[] = [
  {
    lowestResellPrice: {
      stockX: 210,
      flightClub: 199,
      goat: 199,
    },
    imageLinks: [],
    _id: '64c6a7330afa0dd34881d8a0',
    shoeName: 'Jordan 1 Retro High OG UNC Toe',
    brand: 'Jordan',
    silhoutte: 'Jordan 1 Retro High OG',
    styleID: 'DZ5485-400',
    make: 'Jordan 1 Retro High OG',
    colorway: 'University Blue/Black/White',
    retailPrice: 180,
    thumbnail:
      'https://images.stockx.com/images/Air-Jordan-1-High-OG-UNC-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1688675280',
    releaseDate: '2023-07-22',
    description:
      'The Air Jordan 1 Retro High OG ‘UNC Toe’ pays homage to Michael Jordan’s college with a color scheme that recalls the 2018 ‘Bred Toe’ AJ1 release. The shoe features white quarter panels and black overlays on the Swoosh and forefoot against an all-leather base. The toe box, heel, and collar flap are adorned with University Blue accents, with a lateral-side classic Wings logo. The breathable nylon tongue has a retro Nike tag, and lightweight cushioning is provided by a white rubber midsole with an Air-sole heel unit within a polyurethane wedge. Underfoot, sturdy traction is ensured by the blue rubber outsole.',
    urlKey: 'air-jordan-1-high-og-unc-toe',
    resellLinks: {
      stockX: 'https://stockx.com/air-jordan-1-high-og-unc-toe',
      flightClub:
        'https://www.flightclub.com/air-jordan-1-retro-high-og-unc-toe-dz5485-400',
      goat: 'http://www.goat.com/sneakers/air-jordan-1-retro-high-og-unc-toe-dz5485-400',
    },
    goatProductId: 1145907,
  },
  {
    lowestResellPrice: {
      stockX: 179,
      flightClub: 167,
      goat: 167,
    },
    imageLinks: [],
    _id: '64c6a7330afa0d943081d8a1',
    shoeName: 'Jordan 3 Retro Palomino',
    brand: 'Jordan',
    silhoutte: 'Jordan 3 Retro',
    styleID: 'CT8532-102',
    make: 'Jordan 3 Retro',
    colorway: 'Light Orewood Brown/Metallic Gold/Light British Tan/Palomino',
    retailPrice: 200,
    thumbnail:
      'https://images.stockx.com/images/Air-Jordan-3-Retro-Palomino-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1689877240',
    releaseDate: '2023-07-29',
    description:
      "The Air Jordan 3 Retro 'Palomino' revamps the classic silhouette with a rustic vibe, accentuated by subtle earthy hues. The off-white suede upper is adorned with elephant-print overlays in brown on the forefoot and heel, with the distinctive pattern repeated on the eyestay. The padded collar features a perforated nubuck in tan, while the tongue and molded heel tab sport the iconic Jumpman logo. A sturdy grey rubber outsole provides support beneath a vintage-finished PU midsole with an exposed Air-sole unit in the heel.",
    urlKey: 'air-jordan-3-retro-palomino',
    resellLinks: {
      stockX: 'https://stockx.com/air-jordan-3-retro-palomino',
      flightClub:
        'https://www.flightclub.com/air-jordan-3-retro-palomino-ct8532-102',
      goat: 'http://www.goat.com/sneakers/air-jordan-3-retro-palomino-ct8532-102',
    },
    goatProductId: 1163346,
  },
  {
    lowestResellPrice: {
      stockX: 818,
      flightClub: 720,
      goat: 720,
    },
    imageLinks: [],
    _id: '64c6a7330afa0d050c81d8a2',
    shoeName: 'Jordan 1 Retro Low OG SP Travis Scott Reverse Mocha',
    brand: 'Jordan',
    silhoutte: 'Jordan 1 Retro Low OG SP',
    styleID: 'DM7866-162',
    make: 'Jordan 1 Retro Low OG SP',
    colorway: 'Sail/University Red-Ridgerock',
    retailPrice: 150,
    thumbnail:
      'https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Reverse-Mocha_V2-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1659033979',
    releaseDate: '2022-07-21',
    description:
      "Giving a remix on the original 'Mocha' AJ1 from 2019 is the Travis Scott x Air Jordan 1 Low from 2019. The upper features a brown suede base with ivory leather overlays and Scott's signature reverse Swoosh on the lateral side with oversized dimensions and a neutral cream finish. Contrasting scarlet accents distinguish a pair of woven Nike Air tongue tags and mismatched heel tabs with a Cactus Jack and retro Wings logos embroidered. It's built on an off-white rubber midsole with encapsulated Nike Air cushioning in the heel and a brown rubber outsole underfoot.",
    urlKey: 'air-jordan-1-retro-low-og-sp-travis-scott-reverse-mocha',
    resellLinks: {
      stockX:
        'https://stockx.com/air-jordan-1-retro-low-og-sp-travis-scott-reverse-mocha',
      flightClub:
        'https://www.flightclub.com/travis-scott-x-air-jordan-1-low-og-reverse-mocha-dm7866-162',
      goat: 'http://www.goat.com/sneakers/travis-scott-x-air-jordan-1-low-og-reverse-mocha-dm7866-162',
    },
    goatProductId: 854208,
  },
  {
    lowestResellPrice: {
      stockX: 126,
      goat: 130,
    },
    imageLinks: [],
    _id: '64c6a7330afa0dfb2981d8a3',
    shoeName: 'Travis Scott x Jordan Flight Graphic Hoodie Archaeo Brown',
    brand: 'Travis Scott',
    silhoutte: 'Travis Scott x Jordan Flight Graphic',
    styleID: 'DO4093-256',
    make: 'Travis Scott x Jordan Flight Graphic',
    colorway: 'Archaeo Brown',
    retailPrice: 185,
    thumbnail:
      'https://images.stockx.com/images/Travis-Scott-Cactus-Jack-x-Jordan-Flight-Graphic-Hoodie-Archaeo-Brown.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1670987749',
    releaseDate: '2022-12-15',
    description:
      'The Travis Scott x Jordan Flight Graphic Hoodie Archaeo Brown was part of a Nike and musician Travis Scott collaboration honoring NBA player Michael Jordan.\n<br>\n<br>\nThis garment  was made available in an all-brown colorway from 100% cotton fabric. It features kangaroo pockets with adjustable drawstrings on its hood. Additionally, the pullover sweater is embellished with miniature Cactus Jack and Jordan emblems on the chest. On its back and arms, there are Cactus Jack graphics, while a "flight" print adorns its medial back completing the design. \n<br>\n<br>\nThe Travis Scott x Jordan Flight Graphic Hoodie Archaeo Brown debuted on December 15th, 2022 and retailed at $185.',
    urlKey:
      'travis-scott-cactus-jack-x-jordan-flight-graphic-hoodie-archaeo-brown',
    resellLinks: {
      stockX:
        'https://stockx.com/travis-scott-cactus-jack-x-jordan-flight-graphic-hoodie-archaeo-brown',
      goat: 'http://www.goat.com/sneakers/air-jordan-x-travis-scott-hoodie-archaeo-brown-do4093-256',
    },
    goatProductId: 1107987,
  },
  {
    lowestResellPrice: {
      stockX: 278,
    },
    imageLinks: [],
    _id: '64c6a7330afa0d46aa81d8a4',
    shoeName:
      "Jordan x Travis Scott Cactus Jack Women's Leather Jacket Archaeo Brown",
    brand: 'Jordan',
    silhoutte: "Jordan x Travis Scott Cactus Jack Women's Leather",
    styleID: 'DX6168-256',
    make: "Jordan x Travis Scott Cactus Jack Women's Leather",
    colorway: 'Archaeo Brown',
    retailPrice: 600,
    thumbnail:
      'https://images.stockx.com/images/Jordan-x-Travis-Scott-Cactus-Jack-Womens-Leather-Jacket-Archaeo-Brown.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1682407020',
    releaseDate: '2023-04-26',
    description: '',
    urlKey:
      'jordan-x-travis-scott-cactus-jack-womens-leather-jacket-archaeo-brown',
    resellLinks: {
      stockX:
        'https://stockx.com/jordan-x-travis-scott-cactus-jack-womens-leather-jacket-archaeo-brown',
    },
  },
]

const yeezy: ISneaker[] = [
  {
    lowestResellPrice: {
      stockX: 130,
      flightClub: 119,
      goat: 119,
    },
    imageLinks: [],
    _id: '64c6ad6fb15f761478749652',
    shoeName: 'adidas Yeezy Slide Bone (2022/2023 Restock)',
    brand: 'adidas',
    silhoutte: 'adidas Yeezy Slide',
    styleID: 'FZ5897',
    make: 'adidas Yeezy Slide',
    colorway: 'Bone/Bone/Bone',
    retailPrice: 60,
    thumbnail:
      'https://images.stockx.com/images/adidas-Yeezy-Slide-Bone-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1660143189',
    releaseDate: '2023-08-03',
    description:
      "First released in 2019, the 2022 release of the Yeezy Slide 'Bone' brings back a neutral colorway of the minimalist sandal. A light ivory color permeates the one-piece slide, manufactured from injection-molded EVA for lightweight durability. The outsole features a set of grooves for traction, while a small adidas logo can be found on the footbed.",
    urlKey: 'adidas-yeezy-slide-bone-2022',
    resellLinks: {
      stockX: 'https://stockx.com/adidas-yeezy-slide-bone-2022',
      flightClub:
        'https://www.flightclub.com/yeezy-slides-bone-2022-re-release-fz5897',
      goat: 'http://www.goat.com/sneakers/yeezy-slides-bone-2022-re-release-fz5897',
    },
    goatProductId: 952291,
  },
  {
    lowestResellPrice: {
      stockX: 96,
      flightClub: 77,
      goat: 77,
    },
    imageLinks: [],
    _id: '64c6ad6fb15f763f59749653',
    shoeName: 'adidas Yeezy Slide Onyx (2022/2023)',
    brand: 'adidas',
    silhoutte: 'adidas Yeezy Slide',
    styleID: 'HQ6448',
    make: 'adidas Yeezy Slide',
    colorway: 'Onyx/Onyx/Onyx',
    retailPrice: 60,
    thumbnail:
      'https://images.stockx.com/images/adidas-Yeezy-Slide-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1646687426',
    releaseDate: '2022-03-07',
    description: '\n',
    urlKey: 'adidas-yeezy-slide-black-onyx',
    resellLinks: {
      stockX: 'https://stockx.com/adidas-yeezy-slide-black-onyx',
      flightClub: 'https://www.flightclub.com/yeezy-slides-onyx-hq6448',
      goat: 'http://www.goat.com/sneakers/yeezy-slides-onyx-hq6448',
    },
    goatProductId: 884794,
  },
  {
    lowestResellPrice: {
      stockX: 228,
      flightClub: 212,
      goat: 212,
    },
    imageLinks: [],
    _id: '64c6ad6fb15f760da3749654',
    shoeName: 'adidas Yeezy Boost 350 V2 Onyx (2022/2023)',
    brand: 'adidas',
    silhoutte: 'adidas Yeezy Boost 350 V2',
    styleID: 'HQ4540',
    make: 'adidas Yeezy Boost 350 V2',
    colorway: 'Onyx/Onyx/Onyx',
    retailPrice: 230,
    thumbnail:
      'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Onyx-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1656420652',
    releaseDate: '2022-03-05',
    description:
      "A monochromatic 'Onyx' hue envelops the latest Yeezy Boost 350 V2, the lifestyle runner from adidas and Kanye West. The upper features a dark black Primeknit weave along with rope laces, while a post-dyed monofilament side stripe can be found in a lighter black shade. A full-length Boost unit is encapsulated in a semi-translucent ribbed TPU midsole, while a black rubber outsole rounds out the look.",
    urlKey: 'adidas-yeezy-boost-350-v2-onyx',
    resellLinks: {
      stockX: 'https://stockx.com/adidas-yeezy-boost-350-v2-onyx',
      flightClub: 'https://www.flightclub.com/yeezy-boost-350-v2-onyx-hq4540',
      goat: 'http://www.goat.com/sneakers/yeezy-boost-350-v2-onyx-hq4540',
    },
    goatProductId: 886847,
  },
  {
    lowestResellPrice: {
      stockX: 94,
      flightClub: 96,
      goat: 96,
    },
    imageLinks: [],
    _id: '64c6ad6fb15f76903b749655',
    shoeName: 'adidas Yeezy Slide Azure',
    brand: 'adidas',
    silhoutte: 'adidas Yeezy Slide',
    styleID: 'ID4133',
    make: 'adidas Yeezy Slide',
    colorway: 'Azure/Azure/Azure',
    retailPrice: 70,
    thumbnail:
      'https://images.stockx.com/images/adidas-Yeezy-Slide-Azure-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1671115369',
    releaseDate: '2023-05-31',
    description:
      "An eye-catching shade of blue imbues the adidas Yeezy Slide ‘Azure.’ The modern build in one piece of injected EVA foam is constructed on a jagged outsole that provides support and grippyness. Subtle adidas branding is revealed on the footbed's top layer and on the heel.",
    urlKey: 'adidas-yeezy-slide-azure',
    resellLinks: {
      stockX: 'https://stockx.com/adidas-yeezy-slide-azure',
      flightClub: 'https://www.flightclub.com/yeezy-slides-azure-id4133',
      goat: 'http://www.goat.com/sneakers/yeezy-slides-azure-id4133',
    },
    goatProductId: 1042587,
  },
  {
    lowestResellPrice: {
      stockX: 130,
      flightClub: 110,
      goat: 110,
    },
    imageLinks: [],
    _id: '64c6ad6fb15f765330749656',
    shoeName: 'adidas Yeezy Foam RNR MX Cinder',
    brand: 'adidas',
    silhoutte: 'adidas Yeezy Foam RNR',
    styleID: 'ID4126',
    make: 'adidas Yeezy Foam RNR',
    colorway: 'MX Cinder/MX Cinder/MX Cinder',
    retailPrice: 90,
    thumbnail:
      'https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-MX-Brown-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1686134738',
    releaseDate: '2023-05-31',
    description:
      "Bringing a refreshing touch to the slip-on design, the adidas Yeezy Foam Runner 'MX Cinder' incorporates vibrant accents. Crafted from injected EVA foam, the one-piece upper showcases an earthy blend of brown and tan tones. On the vamp, a striking black hue contrasts with unexpected pops of aqua blue. The contoured outsole, featuring a wavy tread pattern, provides excellent traction for every stride. Vents are strategically placed to improve breathability, while the plush top layer of the footbed ensures comfortable strides.",
    urlKey: 'adidas-yeezy-foam-rnnr-mx-brown-blue',
    resellLinks: {
      stockX: 'https://stockx.com/adidas-yeezy-foam-rnnr-mx-brown-blue',
      flightClub:
        'https://www.flightclub.com/yeezy-foam-runner-mx-brown-blue-id4126',
      goat: 'http://www.goat.com/sneakers/yeezy-foam-runner-mx-brown-blue-id4126',
    },
    goatProductId: 1209356,
  },
]

export default function Home() {
  const { space } = getTokens()
  const { bottom, top } = useSafeAreaInsets()

  return (
    <ScrollView
      bg="$background"
      contentContainerStyle={{
        paddingBottom: BOTTOM_TABS_HEIGHT + bottom + space[4].val,
        paddingTop: top + space[4].val,
      }}
    >
      <YStack mx="$4" mb="$8">
        <Heading fs={'$5'} mb="$4">
          Search products
        </Heading>

        <Input search placeholder='Try "Yeezy boost 350"' />
      </YStack>

      <Heading mx="$4" color="$secondary" fs="$2" mb="$6">
        Most Popular
      </Heading>

      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Stack width="$8" />}
        estimatedItemSize={248}
        data={mostPopular}
        contentContainerStyle={{
          paddingHorizontal: space[4].val,
        }}
        renderItem={({ item }) => <SneakerCard data={item} />}
      />

      <Heading mx="$4" color="$secondary" fs="$2" my="$6">
        Jordan
      </Heading>

      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Stack width="$8" />}
        estimatedItemSize={248}
        data={jordans}
        contentContainerStyle={{
          paddingHorizontal: space[4].val,
        }}
        renderItem={({ item }) => <SneakerCard data={item} />}
      />

      <Heading mx="$4" my="$6" color="$secondary" fs="$2">
        Yeezy
      </Heading>

      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Stack width="$8" />}
        estimatedItemSize={248}
        data={yeezy}
        contentContainerStyle={{
          paddingHorizontal: space[4].val,
        }}
        renderItem={({ item }) => <SneakerCard data={item} />}
      />
    </ScrollView>
  )
}
