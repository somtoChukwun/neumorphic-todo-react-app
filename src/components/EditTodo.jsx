import { addDoc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { todoCollectionRef } from '../lib/firestore.collections'
import { doc } from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import './EditTodo.css'

export default function EditTodo() {
    const [todo, setTodo] = useState('')
    const [id, setId] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if (todo === '' || id === ''){
            return
        }
    const docRef = doc(db, 'todos', id)
        updateDoc(docRef, {todo}).then(response => {
            console.log(response)
        }).catch(error => console.log(error.message))
    }


  return (
    <div className='todo__edit'>
         <h4>Edit Todo</h4>
        <form onSubmit={handleSubmit}>
            <FormControl
            className='todo__input'>
                <InputLabel
                 className='input__label'>Enter id</InputLabel>
                <Input 
                 id='id'
                 type="text" 
                 value={id} 
                 onChange={ e => setId(e.target.value)}
                 />
            </FormControl>
        
            <br />
            <FormControl
            className='todo__input'>
                <InputLabel
                 className='input__label'>Change todo...</InputLabel>
                <Input 
                id='todo'
                type="text" 
                value={todo} 
                onChange={ e => setTodo(e.target.value)}
                />
            </FormControl>
            
            <Button 
            className='button__update'
            variant='contained'
            type='submit'>Update</Button>
        </form>
        
    </div>
  )
}
