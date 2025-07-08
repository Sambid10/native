import { StyleSheet, View } from 'react-native';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import AddTodoSection from '../../components/TodoSections/AddTodoSection';
import MainTodoSection from '../../components/MainTodoSection';
import { useEffect, useState } from 'react';

export type Todo = {
  id: number;
  tododesc: string;
  isCompleted: boolean,
};

export default function TodoPage() {
  const [todos, settodos] = useState<Todo[]>([]);

  const handleTodo = (val: string, id: number) => {
    const newtodo: Todo = {
      id: id,
      tododesc: val,
      isCompleted:false,
    };
    settodos([...todos, newtodo]);
  };

  const handleToggle=(id:number,val:boolean)=>{
    settodos(todos.map((todo)=>todo.id === id ? {...todo ,isCompleted:val} : todo))
  }
  const handleDelete=(id:number)=>{
    settodos(
        todos.filter((todo)=>todo.id !== id)
    )
  }

  
  useEffect(()=>{
    console.log(todos)
  },[todos,settodos])


  return (
    <View style={styles.maincontainer}>
      <HeaderSection />
      <MainTodoSection todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
      <AddTodoSection handleTodo={handleTodo} />
    </View>
  );
}

export const styles = StyleSheet.create({
  maincontainer: {
    position: 'relative',
    flex: 1,
    padding:12,
     backgroundColor: '#FAF7F3',
  },
});
