import { Feather } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import {
  HStack,
  Heading,
  Image,
  Loading,
  ScrollView,
  Stack,
  Text,
  TouchableOpacity,
  VStack,
} from '~/components/core'
import {
  useGetProfileQuery,
  useUploadAvatarMutation,
} from '~/store/features/auth/api'
import { AuthActions } from '~/store/features/auth/slice'
import colors from '~/assets/theme/colors'
import { useAppDispatch, useAppSelector } from '~/hooks'

export default function Collection() {
  const dispatch = useAppDispatch()

  const userId = useAppSelector((state) => state.auth.session?.user.id)

  const { data } = useGetProfileQuery({ userId })
  const [uploadAvatar, { isLoading }] = useUploadAvatarMutation()

  const handleUploadAvatar = async () => {
    if (!userId) return

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled) {
        const file = result.assets[0]

        await uploadAvatar({
          userId,
          name: file.fileName || 'avatar.jpg',
          type: file.type || 'image',
          uri: file.uri,
        }).unwrap()
      }
    } catch (error) {
      // TODO: Deal with Avatar upload error
    }
  }

  if (!data) return null

  return (
    <ScrollView
      bg="$white"
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <HStack alignItems="center" paddingTop="$large">
        <VStack f={1} alignItems="center">
          <Heading>26</Heading>
          <Text>My Collection</Text>
        </VStack>

        <TouchableOpacity onPress={handleUploadAvatar}>
          <Stack
            alignItems="center"
            justifyContent="center"
            w={110}
            h={110}
            br="$round"
            borderWidth={3}
            borderColor="$gray5"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              bg="$gray2"
              h={30}
              w={30}
              br="$round"
              position="absolute"
              right={-5}
              top={-5}
              zIndex={10}
            >
              <Feather name="edit" size={16} color="black" />
            </Stack>

            {isLoading ? (
              <Loading />
            ) : (
              <>
                {!data.avatarUrl ? (
                  <Feather name="user" color={colors.gray6} size={48} />
                ) : (
                  <Image
                    alt="Profile Picture"
                    resizeMode="cover"
                    w={100}
                    h={100}
                    br="$round"
                    source={{
                      uri: data.avatarUrl,
                    }}
                  />
                )}
              </>
            )}
          </Stack>
        </TouchableOpacity>

        <VStack f={1} alignItems="center">
          <Heading>50</Heading>
          <Text>Wishlist</Text>
        </VStack>
      </HStack>

      <VStack flex={1} alignItems="center" mt="$medium">
        <Heading>{data.fullName}</Heading>

        <Text mt="$small">{`@${data.username}`}</Text>

        <TouchableOpacity
          mt="$medium"
          onPress={() => dispatch(AuthActions.signOut())}
        >
          <Text color="$primary">Sign out</Text>
        </TouchableOpacity>
      </VStack>
    </ScrollView>
  )
}
