import React from "react";
import GoalItem from "./GoalItem";
import { StyleSheet, View, FlatList } from "react-native";

export default function GoalItems(props) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={props.goalList}
        renderItem={(itemData) => {
          return (
            <GoalItem
              item={itemData.item}
              deleteitemHandler={props.deleteitemHandler}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 3,
  },
});
