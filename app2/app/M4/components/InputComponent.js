import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import { Icon } from ‘react-native-elements’;
const InputComponent = (props) => {
  const { title, isPassword, iconName } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...props} />
        {isPassword ? (
          <View style={styles.iconContainer}>
            <TouchableOpacity {...props}>
              <MaterialCommunityIcons name={iconName} size={22} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 8,
  },
  titleContainer: {
    marginLeft: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 8,
    flex: 1,
    color: "black",
  },
  iconContainer: {
    padding: 8,
  },
});
