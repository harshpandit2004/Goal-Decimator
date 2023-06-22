import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.individualGoal}>
      <Pressable
        android_ripple={{ color: "#ffffff" }}
        onPress={props.deleteitemHandler.bind(this, props.item.key)}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  individualGoal: {
    marginVertical: 10,
    backgroundColor: "#ffcc74",
    borderColor: "2b1d03",
    borderWidth: 1,
    borderRadius: 10,
  },
  goalText: {
    color: "#2b1d03",
    padding: 10,
  },
});
