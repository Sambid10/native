import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Todo } from '../../screens/TodoPage';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
export default function TodoList({
  todos,
  handleDelete,
  handleToggle
}: {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleToggle:(id:number,val:boolean)=>void
}) 
{
  return (
     <>
      <Text style={styles.maintitle}>Your Todos</Text>
      <View style={styles.todolistcontainer}>
        {todos.map((todo, i) => (
          <View key={i} style={styles.container}>
            <View style={[todo.isCompleted ? styles.completedeachtodo : styles.eachtodo]}>
              <Text style={[todo.isCompleted ? styles.completedtoddesc : styles.tododesc]}>{todo.tododesc}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleDelete(todo.id)}
              style={styles.deletebtn}
            >
              <Image
                style={styles.btnicon}
                source={require('../../assets/bin.png')}
              />
            </TouchableOpacity>
            <BouncyCheckbox
              fillColor="green"
              unFillColor="white"
              size={20}
              style={styles.checkbox}
              onPress={()=>handleToggle(todo.id,!todo.isCompleted)}
            />
          </View>
        ))}
      </View>
</>
  );
}
const styles = StyleSheet.create({
  todolistcontainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  maintitle: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 18,
    marginTop: 12,
  },
  
  eachtodo: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    paddingRight: 50,
    paddingLeft: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    minHeight: 60,
    borderWidth: 1,
    borderColor: '#242424',
  },
  completedeachtodo:{
    //  display: 'flex',
    // flexDirection: 'row',
    // padding: 12,
    // paddingRight: 50,
    // paddingLeft: 40,
    // alignItems: 'center',
    // borderRadius: 12,
    // minHeight: 60,
    // borderWidth: 1,
    // borderColor: '#242424',
    backgroundColor:"#f0fdf4"
  },
  container: {
    position: 'relative',
  },
  deletebtn: {
    position: 'absolute',
    right: 8,
    top: '50%',
    zIndex: 20,
    transform: [{ translateY: '-50%' }],
  },
  checkbox: {
    position: 'absolute',
    left: 8,
    top: '50%',
    height: '100%',
    width: '85%',
    zIndex: 10,
    transform: [{ translateY: '-50%' }],
  },
  btnicon: {
    height: 32,
    width: 32,
  },
  tododesc:{
    fontSize:17,

  },
  completedtoddesc:{
     fontSize:17,
    textDecorationLine:"line-through"
  }
});
