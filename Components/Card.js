import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      <Text style={styles.title}>Confirm these interests?</Text>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Choose Again"
              color="hotpink"
              onPress={props.resetInterests}
            />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color="grey" onPress={props.confirm} />
          </View>
          <View style={styles.button}>
            <Button title="Create User" color="grey" onPress={props.newUser} />
          </View>
          <View style={styles.button}>
            <Button title="Map" color="grey" onPress={props.map} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    margin: 20,
    top: 70,
    shadowColor: "black",
    elevation: 20,
    backgroundColor: "black",
    paddingVertical: 180,
    paddingHorizontal: 50,
    borderRadius: 6,
    opacity: 0.8
  },

  title: {
    fontSize: 20,
    margin: 0,
    padding: 0,
    color: "white",
    textAlign: "center"
  },

  buttonContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 20
  },
  button: {
    width: 120,
    textAlign: "center",
    marginHorizontal: 30
  }
});

export default Card;
