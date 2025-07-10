import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchInput from '../TodoComponents/SearchInput';
// import TodoList from '../TodoComponents/TodoList';
import { Todo } from '../../screens/TodoPage';
import TodoListFlatList from '../TodoComponents/TodoFlatList';
export default function MainTodoSection({
  todos,
  handleDelete,
  handleToggle,
  handleEdit,
}: {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleToggle: (id: number, val: boolean) => void;
  handleEdit: (id: number, updateddesc:string) => void;
}) {
  return (
    <ScrollView style={styles.scrollviewcontainer}>
      <SearchInput />
      <TodoListFlatList
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleEdit={handleEdit}
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
