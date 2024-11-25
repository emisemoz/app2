import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ButtonComponent = (props) => {
  const { text } = props;
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} {...props}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "40%",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    margin: 16,
    backgroundColor: "#CAE3BB",
  },
  button: {
    padding: 8,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
