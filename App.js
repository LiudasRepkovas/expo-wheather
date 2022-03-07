import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, BackHandler } from "react-native";
import Wheather from "./components/WheatherComponent";
import Loading from "./components/LoadingComponent";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function App() {
  // sukuriam steitus
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [wheather, setWheather] = useState(null);

  //
  useEffect(async () => {
    const locationInfo = await getLocationPermissionsAndUserLocation();
    const wheatherData = await getWheatherData(locationInfo.latitude, locationInfo.longitude);
    setIsLoading(false);
    setLocation(locationInfo);
    setWheather(wheatherData);
  }, []);

  const ShowWheatherIfNotLoading = () => {
    if (isLoading) {
      return <Loading></Loading>;
    } else {
      return <Wheather location={location} wheather={wheather}></Wheather>;
    }
  };

  return (
    <View style={styles.container}>
      <ShowWheatherIfNotLoading
        isLoading={isLoading}
      ></ShowWheatherIfNotLoading>
      <StatusBar style="auto" />
    </View>
  );
}


async function getLocationPermissionsAndUserLocation() {
  // klausiam userio permisionu
  let permissionsResult = await Location.requestForegroundPermissionsAsync();
  if (permissionsResult.status == "granted") {
    // gaunam location duomenis
    let location = await Location.getCurrentPositionAsync({});

    return location.coords;
  } else {
    // metam errora jei useris neduoda permissionu
    alert("Could not get permissions. Allow to access location to use app.");
  }
}

async function getWheatherData(lat, lon) {
  const requestResult = await fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&lat='+lat+'&lon='+lon+'&appid=5cf2bd2ce0a3b3cf847ef5502316b2ac');
  const resultJSON = await requestResult.json();
  return resultJSON;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
