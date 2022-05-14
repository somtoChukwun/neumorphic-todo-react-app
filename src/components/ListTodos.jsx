import React, { useEffect, useState } from 'react'
import {collection, getDocs, doc, deleteDoc} from "firebase/firestore"
import { db } from '../lib/init-firebase'
import { todoCollectionRef } from '../lib/firestore.collections'
import { deleteTodo } from './DeleteTodo'
import { Button, Divider, List, ListItem, ListItemText } from '@material-ui/core'
import './ListTodos.css'

export default function ListTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
      
    }, [])

    useEffect(() => {
      console.log(todos)
    }, [todos])
    
    

    function getTodos() {
        // const todoCollectionRef = collection(db, 'todos')
        getDocs(todoCollectionRef).then(response => {
            const todotasks = response.docs.map(doc => ({
                data: doc.data(), 
                id: doc.id,
            }))
            setTodos(todotasks)
        })
        .catch(error => console.log(error.message))
    }
    // const deleteTodo = (id) => {
    //     const docRef = doc(db, 'todos', id)
    //     deleteDoc(docRef).then(() => console.log('Document deleted'))
    //     .catch(error => console.log(error.message))
    // }


  return (
    <div >
    <div className='todos__list'>
        <h4>List Todos</h4>
        <Button className='button__refresh'
        variant='contained'
        onClick={() => getTodos()}>Refresh todos</Button>
        </div>
        <ul>
            {todos.map(todo => (
            <List className="todo__list">
            <ListItem 
            key={todo.id}>
                
                <ListItemText primary={todo.data.todo} secondary={todo.id} />
                <Button 
                className='button__remove'
                variant='contained' 
                onClick={() => deleteTodo(todo.id)}>x</Button>
                </ListItem>
                <Divider />
                </List>
            ))}
        </ul>
    </div>
  )
}



