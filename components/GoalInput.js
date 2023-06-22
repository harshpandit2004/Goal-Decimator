import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

export default function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide" style={styles.modal}>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={props.updateGoalItem}
          value={props.goalItem}

        />
        <View style={styles.buttonView}>
          <Button
            title="add goal"
            onPress={props.addGoalItem}
            color={"#2b1d03"}
          />
          <Button
            title="Cancel"
            onPress={props.cancelHandler}
            color={"#2b1d03"}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#2b1d03",
    backgroundColor: "#ffb327",
    color: "#ffc251",
    paddingHorizontal: 30,
    borderStyle: "solid",
    borderColor: "#2b1d03",
    borderTopWidth: 5,
    borderRadius: 5,
  },
  textInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#2b1d03",
    color: "#000000",
    borderRadius: 10,
    padding: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 50,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    margin: 50,
  }
});
