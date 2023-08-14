import { useState } from 'react'
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
import SignUpSVG from '~/assets/svgs/SignUp.svg'
import theme from '~/assets/theme'
import supabase from '~/services/supabase'

export default function SignUp() {
  const { top } = useSafeAreaInsets()
  const { back } = useRouter()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    try {
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
        })

      if (signUpError) {
        // TODO: Deal with Sign Up Error
        return
      }

      const { error } = await supabase.from('profiles').upsert({
        id: signUpData.session?.user.id,
        username,
        full_name: name,
      })

      if (error) {
        // TODO: Deal with Update profile error
        return
      }

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
            />
          </Stack>

          <Stack my="$small">
            <Input
              iconName="hash"
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
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
            />
          </Stack>

          <Stack my="$small">
            <Input
              secureTextEntry
              iconName="key"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleSignUp}
            />
          </Stack>

          <Button.Container mt="$small" onPress={handleSignUp}>
            <Button.Text>Sign up</Button.Text>
          </Button.Container>

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
