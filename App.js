import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function App() {
  const [todos, SetTodos] = useState([
    {text: 'A CUP OF COFFEE', key: '1'},
    {text: 'WATCHING A MOVIE', key: '2'},
    {text: 'READING A BOOK', key: '3'},
  ]);

  const pressHandler = key => {
    SetTodos(prevTodos => {
      return prevTodos.filter(todos => todos.key != key);
    });
  };
  const submitHandler = text => {
    if (text.length > 3) {
      SetTodos(prevTodos => {
        return [{text: text, key: Math.random.toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!','Todos must be over 3 chars long',[
        {text: 'Understood',onPress:() => console.log('alert closed')}
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => { 
      Keyboard.dismiss();
      console.log('Dismissed Keyboard')
    }}>

    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1616628188550-808682f3926d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        }}
        // resizeMode="stretch"
        style={styles.img}></ImageBackground>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => {
              return <TodoItem item={item} pressHandler={pressHandler} />;
            }}
            />
        </View>
      </View>
    </View>
            </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    imageBackgroundColor: 'coral',
  },
  content: {
    padding: 40,
    backgroundColor: '#ffff',
    position: 'relative',
    opacity: 0.8,
  },
  list: {
    backgroundColor: '#ffff',
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
