import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from './Todo';


function App() {

    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("");
    useEffect(() => {
        getTodos();

    }, [])

    function getTodos() {
        db.collection("todos").onSnapshot(function(querySnapshot) {
            setTodos(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                todo: doc.data().todo,
                inprogress: doc.data().inprogress
            })))
        })
    }

    function addTodo(e) {
        e.preventDefault();
         if ( todoInput.trim().length === 0){
      // fixed blank issues
    }
    else{
        db.collection("todos").add({
            inprogress: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: todoInput,
        });
    }

        setTodoInput("");

    }

    return ( <
        div className = "App" >
        <
        div style = {
            { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }
        } >
        <
        h1 > Omkar Patke Todo 's App 🔥</h1> < 
        form >
        <
        TextField id = "standard-basic"
        label = "Write a Todo"

        value = { todoInput }



        onChange = {
            (e) => setTodoInput(e.target.value)
        }
        style = {
            { width: "300px" }
        }
        / > <Button style={{display:"none"}} tabIndex="0"  type = "submit"
        variant = "contained"
        onClick = { addTodo } > Default < /Button> < /
        form > {
            todos.map((todo) => ( <
                TodoListItem todo = { todo.todo }
                inprogress = { todo.inprogress }
                id = { todo.id }
                />
            ))
        }




        <
        /div>







        <
        /
        div >


    );
}

export default App;