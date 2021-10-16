import React from "react";
import app from "../firebase";
import { getFirestore , addDoc, getDocs , collection } from "firebase/firestore";
function WriteFire(id , name ,age , phone , re){
    const firebase = getFirestore(app);
    try {
        const docRef = addDoc(collection(firebase, "review"), {
            name : name,
            age: age,
            phone : phone,
            review:re,
            id:id,
        });
    } catch (e) {
        console.error("Error adding document");
    }
}
export default WriteFire;