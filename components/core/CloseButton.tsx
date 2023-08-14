import Feather from '@expo/vector-icons/Feather'
import theme from '~/assets/theme'
import TouchableOpacity from './TouchableOpacity'

type CloseButtonProps = Parameters<typeof TouchableOpacity>[0]

export default function CloseButton({ ...props }: CloseButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      hitSlop={{
        top: 16,
        bottom: 16,
        left: 16,
        right: 16,
      }}
    >
      <Feather name="x" size={24} color={theme.colors.black} />
    </TouchableOpacity>
  )
}
