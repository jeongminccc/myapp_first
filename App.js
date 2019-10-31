import React from 'react';
import { StyleSheet, Text, View, FlatList,AsyncStorage  } from 'react-native';
import Header from './app/components/Header'
import SubTitle from './app/components/SubTitle'
import Input from './app/components/Input'
import TodoItem from './app/components/Todo'

export default class App extends React.Component {

  state = {
    inputValue: "",
    todos: [
      {
        title: "운동 1시간 30분하기",
        isComplete: false
      },
      {
        title: "알고리즘 문제 4개풀기",
        isComplete: false
      },
      {
        title: "단백질 챙겨먹기",
        isComplete: false
      },
      {
        title: "부모님 안부 전화 드리기",
        isComplete: false
      },
      {
        title: "일찍 자고 일찍 일어나기",
        isComplete: false
      }
    ]
  }
  
  componentWillMount() {
    AsyncStorage.getItem('@todo:state').then((state)=> {
        if( state != null){
            this.setState(JSON.parse(state));
        }
    });
  }
  saveItem = () => {
    //state를 문자열로 바꿔서 저장함
    AsyncStorage.setItem('@todo:state',JSON.stringify(this.state));
  }
  _makeTodoItem = ({ item, index }) => {
    return (
      <TodoItem
        text={item.title}
        isComplete={item.isComplete}
        changeComplete={() => {
          const newTodo = [...this.state.todos];
          newTodo[index].isComplete = !newTodo[index].isComplete;
          this.setState({todos:newTodo},this.saveItem);
        }}
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index,1);
          this.setState({todos:newTodo},this.saveItem);
        }} />
    );
  }

  _changeText = (value) => {
    this.setState({inputValue:value});
  }

  _addTodoItem = () =>{
    if(this.state.inputValue != ''){
    const Input = this.state.inputValue;
    const prevItem = this.state.todos;
    const newItem = { title: Input, isComplete: false}
    this.setState({
      inputValue: '',
      todos: prevItem.concat(newItem)
    },this.saveItem);
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Header />
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="해야될 일을 입력하세요" />
          <Input
              value={this.state.inputValue}
              changeText={this._changeText}
              addTodo={this._addTodoItem}/>
        </View>
        <View style={styles.todoContainer}>
          <SubTitle title="해야될 일들" />
          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem}
            keyExtractor={(item, index) => { return `${index}` }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor :'red',
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
  },
  inputContainer: {
    marginLeft: 20,
    color:'white',
  },
  todoContainer: {
    marginTop: 20,
    marginLeft: 20,
    color:'white',
  }
});