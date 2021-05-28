import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty

    var taskString = JSON.stringify(tasks);
    var regex = new RegExp(newTaskTitle);

    var taskExist = regex.test(taskString);

    if (!taskExist) {
      var newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks((oldState) => [...oldState, newTask]);
    } else {
      console.log("Essa tarefa ja foi inserida");
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
  }

  return (
    <View style={styles.home}>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#191920",
    flex: 1,
  },
  
});
