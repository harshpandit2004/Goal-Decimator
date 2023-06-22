import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.individualGoal}>
      <Text style={styles.goalText}>{props.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  individualGoal: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffcc74",
    borderColor: "2b1d03",
    borderWidth: 1,
    borderRadius: 10,
  },
  goalText: {
    color: "#2b1d03",
  },
});
