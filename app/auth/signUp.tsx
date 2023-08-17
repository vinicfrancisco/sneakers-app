import { useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link, router, useRouter } from 'expo-router'
import {
  BackButton,
  Button,
  Divider,
  HStack,
  Input,
  ScrollView,
  Stack,
  Text,
  TouchableOpacity,
  VStack,
} from '~/components/core'
import { useSignUpMutation } from '~/store/features/auth/api'
import SignUpSVG from '~/assets/svgs/SignUp.svg'
import theme from '~/assets/theme'

export default function SignUp() {
  const { top } = useSafeAreaInsets()
  const { back } = useRouter()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signUp, { isLoading }] = useSignUpMutation()

  const usernameInputRef = useRef<TextInput | null>(null)
  const emailInputRef = useRef<TextInput | null>(null)
  const passwordInputRef = useRef<TextInput | null>(null)

  const handleSignUp = async () => {
    try {
      await signUp({
        email,
        fullName: name,
        username,
        password,
      }).unwrap()

      router.push('/(tabs)')
    } catch (error) {
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
      <BackButton
        onPress={back}
        marginRight="auto"
        marginLeft="$medium"
        marginTop={top + theme.space.medium}
      />

      <VStack flex={1} justifyContent="center" alignItems="center">
        <SignUpSVG height={150} />

        <Stack w="100%" px="$xlarge" my="$large">
          <Text textAlign="left" mb="$small">
            Let's get you all set up so you can check all the sneakers you want!
          </Text>

          <Stack my="$small">
            <Input
              iconName="user"
              placeholder="Name"
              value={name}
              onChangeText={setName}
              onSubmitEditing={() => usernameInputRef.current?.focus()}
            />
          </Stack>

          <Stack my="$small">
            <Input
              iconName="hash"
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              onSubmitEditing={() => emailInputRef.current?.focus()}
            />
          </Stack>

          <Stack my="$small">
            <Input
              iconName="mail"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />
          </Stack>

          <Stack mt="$small" mb="$large">
            <Input
              secureTextEntry
              iconName="key"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleSignUp}
            />
          </Stack>

          <Button loading={isLoading} onPress={handleSignUp}>
            Sign Up
          </Button>

          <HStack my="$medium" alignItems="center">
            <Divider mx="$medium" />

            <Text>or</Text>

            <Divider mx="$medium" />
          </HStack>

          <HStack alignItems="center" justifyContent="center">
            <Text>Already have an account?</Text>

            <Link href={'/auth/signIn'} asChild>
              <TouchableOpacity>
                <Text bold="true" color="$primary">
                  {' '}
                  Sign in
                </Text>
              </TouchableOpacity>
            </Link>
          </HStack>
        </Stack>
      </VStack>
    </ScrollView>
  )
}
