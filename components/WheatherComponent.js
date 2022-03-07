import { StyleSheet, Text, View } from "react-native";

export default function Wheather(props) {
  console.log(props)

  const ShowLocationAndWheatherIfItExists = () => {
    if (props.location === null || props.wheather === null) {
      return <Text>No info.</Text>;
    } else {
      return (
        <View>
          <Text>Location:</Text>
          <Text>{props.location.latitude}</Text>
          <Text>{props.location.longitude}</Text>

          
          <Text>Temperature:</Text>
          <Text>{props.wheather.main.temp}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>Wheather</Text>
      {ShowLocationAndWheatherIfItExists()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
