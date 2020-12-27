import React,{useState,useEffect} from "react";
import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus] = useState("all");
  const[filteredTodos,setFilterTodos] = useState([]);
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case "completed":
          setFilterTodos(todos.filter(todo => todo.completed === true));
          break;
        case "uncompleted":
          setFilterTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilterTodos(todos);
          break;
  
      }
    };
    filterHandler();
  },[todos,status]);
  
  
  return (
    <div className="App">
      <header>
        <h1>Sakshi's Todo List  </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
