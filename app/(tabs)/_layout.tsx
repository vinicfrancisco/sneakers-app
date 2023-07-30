import BottomTabs from '@/components/BottomTabs'
import Feather from '@expo/vector-icons/Feather'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <BottomTabs {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
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
        name="collection"
        options={{
          title: 'My Collection',
          tabBarIcon: ({ size, color }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
