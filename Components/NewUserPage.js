import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Picker,
  Text,
  View,
  TextInput
} from "react-native";
// import MapView from "react-native-maps";

export default class NewUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      ageRange: "",
      gender: ""
    };
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subTitle}>Username / Email</Text>
            <TextInput
              style={styles.text}
              placeholder="Enter your username"
              onChangeText={text => this.setState({ username })}
              value={this.state.text}
            />
            <TextInput
              style={styles.text}
              placeholder="Enter your email"
              onChangeText={text => this.setState({ email })}
              value={this.state.text}
            />
            <Text style={styles.subTitle}>Password</Text>
            <TextInput
              style={styles.text}
              placeholder="Enter your password"
              onChangeText={text => this.setState({ password })}
              value={this.state.text}
            />
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>Extra Details</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={this.state.ageRange}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                mode="dropdown"
                onValueChange={itemValue =>
                  this.setState({ ageRange: itemValue })
                }
              >
                <Picker.Item label="Select your age range" value="" />
                <Picker.Item label="Under 16 years" value="0-15" />
                <Picker.Item label="16 - 25 years" value="16-25" />
                <Picker.Item label="26 - 39 years" value="26-39" />
                <Picker.Item label="40 - 65 years" value="40-65" />
                <Picker.Item label="Over 65 years" value="66-99" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={this.state.gender}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                mode="dropdown"
                onValueChange={itemValue =>
                  this.setState({ gender: itemValue })
                }
              >
                <Picker.Item label="Select your gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>
        </ScrollView>

        {/* <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: 53.472101,
              longitude: -2.238568,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            showsUserLocation={true}
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // mapContainer: {
  //   marginTop: "5%",
  //   alignSelf: "center",
  //   height: "90%",
  //   width: "90%",
  //   backgroundColor: "rgba(25,25,25,1)"
  //   // backgroundColor: "orange"
  // },
  // map: {
  //   alignSelf: "center",
  //   position: "absolute",
  //   top: "20%",
  //   height: "60%",
  //   width: "90%"
  // },
  container: {
    alignSelf: "center",
    // height: "85%",
    width: "90%",
    backgroundColor: "rgba(25,25,25,1)"
    // backgroundColor: "orange"
  },
  subContainer: {
    padding: "5%"
    // backgroundColor: "orange"
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    padding: 20
    // backgroundColor: "orange"
  },
  subTitle: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 24,
    borderBottomColor: "black",
    color: "white"
    // backgroundColor: "orange"
  },
  text: {
    height: 50,
    width: 300,
    marginBottom: 20,
    textAlign: "center",
    alignSelf: "center",
    fontSize: 18,
    color: "white",
    backgroundColor: "rgba(75,75,75,1)",
    padding: 5,
    borderRadius: 10
    // backgroundColor: "orange"
  },
  pickerContainer: {
    // flexDirection: "row",
    // textAlign: "center",
    // alignItems: "center",
    alignSelf: "center",
    // justifyContent: "center"
    // height: "30%",
    width: "90%",
    borderRadius: 10
    // backgroundColor: "rgba(75,75,75,1)",
    // backgroundColor: "orange"
  },
  picker: {
    // height: "30%",
    width: "95%",
    marginBottom: 20,
    alignSelf: "center",
    color: "white",
    backgroundColor: "rgba(75,75,75,1)"
    // backgroundColor: "orange"
  }
});
