import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db } from '../lib/init-firebase'

export const deleteTodo = (id) => {
        const docRef = doc(db, 'todos', id)
        deleteDoc(docRef).then(() => console.log('Document deleted'))
        .catch(error => console.log(error.message))
    }


