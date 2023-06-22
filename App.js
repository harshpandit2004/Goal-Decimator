import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App(props) {
  const [goalItem, setGoalItem] = useState("");
  const [goalList, setGoalList] = useState([
    { text: "This is Goal Decimator!", key: "00" },
    {
      text: 'You can add goals by clinking the "add new goal" button',
      key: "01",
    },
    {
      text: "You can also decimate a goal by tapping the goal itself",
      key: "02",
    },
    { text: "The World's your Oyster! 🌍", key: "03" },
    { text: "~ monke", key: "04" },
  ]);
  const [visible, setVisible] = useState(false);
  function updateGoalItem(enteredText) {
    setGoalItem(enteredText);
  }
  function addGoalItem() {
    setGoalList((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalItem, key: Math.random().toString() },
    ]);
    setGoalItem("");
    setVisible(false);
  }
  function cancelHandler() {
    setVisible(false);
  }
  function deleteitemHandler(key) {
    setGoalList((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    });
  }
  function modalVisibility() {
    setVisible(true);
  }

  return (
    <View style={styles.mainContainer}>
      <Button
        title="Add New Goal"
        onPress={modalVisibility}
        color={"#2b1d03"}
      />
      <GoalInput
        updateGoalItem={updateGoalItem}
        addGoalItem={addGoalItem}
        goalItem={goalItem}
        visible={visible}
        cancelHandler={cancelHandler}
      />
      <GoalItems goalList={goalList} deleteitemHandler={deleteitemHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#ffc251",
    flexDirection: "column",
  },
});
