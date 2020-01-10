import React, { Component } from "react";
import { StyleSheet, View, PermissionsAndroid } from "react-native";
import MapView from "react-native-maps";

export default class NewUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
  }

  render() {
    return (
      <View>
        <View style={styles.mapContainer}>
          <MapView
            // annotations={markers}
            followsUserLocation={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            toolbarEnabled={true}
            zoomEnabled={true}
            rotateEnabled={true}
            style={styles.map}
            region={{
              latitude: 53.472101,
              longitude: -2.238568,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
            onMapReady={() => {
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
              ).then(granted => {
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  alert("Location permission granted");
                } else {
                  alert("Location permission denied");
                }
              });
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: 53.472101,
                longitude: -2.238568,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            />
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    marginTop: "5%",
    alignSelf: "center",
    height: "95%",
    width: "90%",
    backgroundColor: "rgba(25,25,25,1)"
    // backgroundColor: "orange"
  },
  map: {
    marginTop: "5%",
    alignSelf: "center",
    position: "absolute",
    // top: "20%",
    height: "95%",
    width: "90%"
  }
});
