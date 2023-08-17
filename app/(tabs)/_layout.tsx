import Feather from '@expo/vector-icons/Feather'
import { Tabs, router } from 'expo-router'
import BottomTabs from '~/components/BottomTabs'
import { useAppSelector } from '~/hooks'

export default function TabLayout() {
  const session = useAppSelector((state) => state.auth.session)

  return (
    <Tabs tabBar={(props) => <BottomTabs {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ size, color }) => (
            <Feather name="tag" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        listeners={() => ({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          tabPress: ({ preventDefault }) => {
            if (!session) {
              preventDefault()

              router.push('/auth')
            }
          },
        })}
      />
    </Tabs>
  )
}
