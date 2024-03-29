import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const TodoInput = props => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoInputHandler = enteredText => {
    setEnteredTodo(enteredText);
  };

  const addTodolHandler = () => {
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Items"
          style={styles.input}
          onChangeText={todoInputHandler}
          value={enteredTodo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addTodolHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default TodoInput;
