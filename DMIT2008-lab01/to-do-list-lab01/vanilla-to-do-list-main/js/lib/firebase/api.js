/* 
                Read Data from RTDB 


*/

import { ref, get } from 'firebase/database'
import { db } from './config/firebaseInit'

async function getToDoData() {
	const dbRef = ref(db, '/todos')
	const dataSnapshot = await get(dbRef)
	return await dataSnapshot.val()
}

async function getToDoItem() {}

async function updateToDo() {}

async function deleteToDo() {}

export { getToDoData }
