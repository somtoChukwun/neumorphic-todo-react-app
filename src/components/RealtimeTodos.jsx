import { onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { todoCollectionRef } from '../lib/firestore.collections'
import ListTodos from './ListTodos'
import { deleteTodo } from './DeleteTodo'
import { Button, Divider, List, ListItem, ListItemText } from '@material-ui/core'
import './ListTodos.css'

export default function RealtimeTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
       const unsubscribe = onSnapshot(todoCollectionRef, snapshot => {
           setTodos(snapshot.docs.map(doc => ({
               id: doc.id, 
               data: doc.data()})))
        })
    
      return () => {
        unsubscribe()
      }
    }, [])


  return (
    <div>
        
        <h4>Realtime</h4>
        <ul>
            {todos.map(todo => (
            <List>
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
