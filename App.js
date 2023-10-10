import { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todo';
import AddTodo from './components/form';
import { preprocess } from 'react-native-web/dist/cjs/exports/StyleSheet/preprocess';

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
    <View style={styles.container}>
       <Header />
       <View style={styles.content}>
          <AddTodo addToList={addTaskHandler}/>
          <View style={styles.list}>
            <FlatList  
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} deteleTask={deleteTaskHandler}/>
              )}
            />
          </View>
       </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
   padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
