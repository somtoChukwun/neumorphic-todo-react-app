import { collection } from "firebase/firestore"
import { db } from "./init-firebase"

export const todoCollectionRef = collection(db, 'todos')