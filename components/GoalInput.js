import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal"
        onChangeText={props.updateGoalItem}
      />
      <Button title="add goal" onPress={props.addGoalItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10%",
    borderBottomWidth: 1,
    height: "25%",
    borderColor: "#2b1d03",
    color: "#2b1d03",
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#2b1d03",
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
  },
});
