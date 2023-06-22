import { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App(props) {

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
      <GoalInput updateGoalItem={updateGoalItem} addGoalItem={addGoalItem}/>
      <GoalItems goalList={goalList} />
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
});
