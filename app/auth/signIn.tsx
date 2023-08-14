import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link, router, useRouter } from 'expo-router'
import {
  Button,
  CloseButton,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  ScrollView,
  Stack,
  Text,
  TouchableOpacity,
  VStack,
} from '~/components/core'
import SneakerImage from '~/assets/images/sneaker.png'
import theme from '~/assets/theme'
import supabase from '~/services/supabase'

export default function SignIn() {
  const { top } = useSafeAreaInsets()
  const { back } = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        // TODO: Deal with Sign In Error
        return
      }

      router.push('/(tabs)')
    } catch {
      // TODO: Deal with generic error
    }
  }

  return (
    <ScrollView
      bg="$white"
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <CloseButton
        onPress={back}
        marginLeft="auto"
        marginRight="$medium"
        marginTop={top + theme.space.medium}
      />

      <VStack flex={1} alignItems="center" mt="$xlarge">
        <Image
          source={SneakerImage}
          alt="Sneaker Image"
          resizeMode="contain"
          height={200}
        />

        <Stack w="100%" px="$xlarge" my="$large">
          <Heading textAlign="center" mb="$medium" fontSize="$xlarge">
            Welcome to Sneakers App!
          </Heading>

          <Text textAlign="left" mb="$small">
            Sign in to check all the sneakers you want!
          </Text>

          <Stack my="$small">
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </Stack>

          <Stack my="$small">
            <Input
              secureTextEntry
              iconName="key"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleSignIn}
            />
          </Stack>

          <Text textAlign="right" bold="true" mb="$small">
            Forgot password?
          </Text>

          <Button.Container mt="$small">
            <Button.Text>Sign In</Button.Text>
          </Button.Container>

          <HStack my="$medium" alignItems="center">
            <Divider mx="$medium" />

            <Text>or</Text>

            <Divider mx="$medium" />
          </HStack>

          <HStack alignItems="center" justifyContent="center">
            <Text>Don't have an account?</Text>

            <Link href={'/auth/signUp'} asChild>
              <TouchableOpacity>
                <Text bold="true" color="$primary">
                  {' '}
                  Sign up
                </Text>
              </TouchableOpacity>
            </Link>
          </HStack>
        </Stack>
      </VStack>
    </ScrollView>
  )
}
