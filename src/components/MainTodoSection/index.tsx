import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchInput from '../TodoComponents/SearchInput';
import TodoList from '../TodoComponents/TodoList';
import { Todo } from '../../screens/TodoPage';
export default function MainTodoSection({
  todos,
  handleDelete,
  handleToggle,
}: {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleToggle: (id: number, val: boolean) => void;
}) {
  return (
    <ScrollView style={styles.scrollviewcontainer}>
      <SearchInput />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollviewcontainer: {
    marginTop: 12,
    marginBottom: 70,
    position: 'relative',
   
  },
});
