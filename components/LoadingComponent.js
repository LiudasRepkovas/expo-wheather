import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kazkasKitas: {
      color: 'red',
  }
});
