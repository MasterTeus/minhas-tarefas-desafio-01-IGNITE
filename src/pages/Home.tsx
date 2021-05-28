import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

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
    if (!newTaskTitle) {
      console.log(newTaskTitle.length);
      return null;
    }
    var myTasks = tasks.filter((task) => task.title === newTaskTitle)[0];

    if (!myTasks) {
      var newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks((oldState) => [newTask, ...oldState]);
    } else {
      alert("Essa tarefa ja foi inserida");
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const filterArr = tasks.filter((task) => task.id === id)[0];

    filterArr.done = !filterArr.done;

    const removeArrayFiltered = tasks.filter((task) => task.id !== id);

    setTasks((oldState) => [...removeArrayFiltered, filterArr]);
  }

  function handleRemoveTask(id: number) {
    const removeTask = tasks.filter((task) => task.id !== id);

    setTasks(removeTask);

    console.log(removeTask);
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
