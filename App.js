import React,{useState,useEffect} from "react"
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input,setInput] = useState("")
  const [todos,setTodos] = useState([initialState])
  const [editTodo,setEditTodo] = useState(null);
  useEffect (() => {
    localStorage.setItem("todos, JSON.stringfy(todos)")
  },[todos])
  return (
    <div classname="wrapper">
      <div classname="app-wrapper">
        <div>
          <Header></Header>
        </div>
        <div>
        <Form
        input = {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
        editTodo = {editTodo}
        setEditTodo = {setEditTodo}
        
        ></Form>
        </div>
        <TodoList todos = {todos} setTodos = {setTodos} setEditTodo = {setEditTodo}></TodoList>

      </div>
    </div>
  );
}

export default App;
