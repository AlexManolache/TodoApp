import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todo';
import AddTodo from './components/form';
import EmptyList from './components/empty';


export default function App() {

  const [todos, setTodos] = useState ([
    {text: 'buy a coffee', key: '1'},
    {text: 'buy some pizza', key: '2'},
    {text: 'learn how to cook pasta', key: '3'}
  ]);

  const deleteTaskHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key );
    });
  }

  const addTaskHandler = (val) => {
    setTodos((prevTodos) => {
      return [
        { text: val, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
            <AddTodo addToList={addTaskHandler}/>
            {
                todos.length > 0 ? 
                <View style={styles.list}>
                  <FlatList  
                    data={todos}
                    renderItem={({ item }) => (
                      <TodoItem item={item} deteleTask={deleteTaskHandler}/>
                    )}
                  />
                </View> :
                <EmptyList />
            }
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
   padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row'
  }

});
