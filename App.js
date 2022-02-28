import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Wheather from './components/WheatherComponent';
import Loading from './components/LoadingComponent';
import * as Location from 'expo-location';

export default function App() {
  return (
    <View style={styles.container}>
      <ShowWheatherIfNotLoading isLoading={true}></ShowWheatherIfNotLoading>
      <StatusBar style="auto" />
    </View>
  );
}

function ShowWheatherIfNotLoading(props) {
  if(props.isLoading) {
    return (<Loading></Loading>)
  } else {
    return (<Wheather></Wheather>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
