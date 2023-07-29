import { Link } from 'expo-router'
import { StyleSheet, View, Text } from 'react-native'

export default function SneakerDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Link href={`/(tabs)/home`}>Voltar para Home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
