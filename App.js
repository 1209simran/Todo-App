import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [courseTodo, setcourseTodo] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTodolHandler = todoTitle => {
    setcourseTodo(current => [
      ...current,
      { id: Math.random().toString(), value: todoTitle }
    ]);
    setIsAddMode(false);
  };

  const removeTodoHandler = todoId => {
    setcourseTodo(current => {
      return current.filter(todo => todo.id !== todoId);
    });
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Items" onPress={() => setIsAddMode(true)} />
      <TodoInput
        visible={isAddMode}
        onAddTodo={addTodolHandler}
        onCancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseTodo}
        renderItem={itemData => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removeTodoHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
