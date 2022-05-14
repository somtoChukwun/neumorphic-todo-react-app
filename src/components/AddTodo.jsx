import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import { todoCollectionRef } from '../lib/firestore.collections'
import { Button, FormControl, IconButton, Input, InputLabel } from '@material-ui/core'
import './RootStyles.css'
import './AddTodo.css'
import CreateIcon from '@material-ui/icons/Create';

export default function AddTodo() {
    const [todo, setTodo] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if (todo === ''){
            return
        }
        // const todosCollRef = collection(db, 'todos')
        addDoc(todoCollectionRef, {todo}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
        })
        
    }

  return (
      
    <div className='todo__add'>
       <CreateIcon 
       className='icon__create'/>
        <form onSubmit={handleSubmit}>
            <FormControl
            className='todo__input'>
                <InputLabel
                className='input__label'
                >Write something...</InputLabel>
                <Input 
                
                 type="text" 
                 value={todo} 
                 onChange={ e => setTodo(e.target.value)}
                /></FormControl>
            <Button 
            className='button__addtodo' 
            variant='contained'
            type='submit'>Add</Button>
            
            

        </form>
        
        </div>
  )
}
