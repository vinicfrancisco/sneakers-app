import { Tabs, router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Stack, XStack, useTheme } from 'tamagui'

type BottomTabProps = Parameters<
  NonNullable<Parameters<typeof Tabs>[0]['tabBar']>
>[0]

interface HandlePressProps {
  routeKey: string
  routeName: string
  isFocused: boolean
}

export default function BottomTabs({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabProps) {
  const { background, secondary } = useTheme()

  const handlePress = ({
    routeKey,
    routeName,
    isFocused,
  }: HandlePressProps) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      const tab = routeName !== 'index' ? routeName : '/(tabs)'

      router.push(tab as any)
    }
  }

  const handlelongPress = (routekey: string) => {
    navigation.emit({
      type: 'tabLongPress',
      target: routekey,
    })
  }

  return (
    <XStack
      bg="$primary"
      br="$10"
      position="absolute"
      bottom={insets.bottom}
      px="$4"
      left={50}
      f={1}
      right={50}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index
        const { options } = descriptors[route.key]

        return (
          <Stack key={route.key} f={1}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() =>
                handlePress({
                  routeKey: route.key,
                  routeName: route.name,
                  isFocused,
                })
              }
              onLongPress={() => handlelongPress(route.key)}
            >
              <Stack key={route.key} f={1} ai="center" py="$4">
                {options?.tabBarIcon?.({
                  color: isFocused ? background.get() : secondary.get(),
                  focused: isFocused,
                  size: 24,
                })}
              </Stack>
            </TouchableOpacity>
          </Stack>
        )
      })}
    </XStack>
  )
}
