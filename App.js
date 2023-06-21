import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goalItem, setGoalItem] = useState({});
  const [goalList, setGoalList] = useState([]);

  function updateGoalItem(enteredText) {
    setGoalItem(enteredText);
  }
  function addGoalItem() {
    setGoalList((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalItem, key: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={updateGoalItem}
        />
        <Button title="add goal" onPress={addGoalItem} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data = {goalList}
          renderItem = {(itemData) => {
            return (
              <View style={styles.individualGoal}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#ffc251",
  },
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
  goalsContainer: {
    flex: 3,
  },
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
