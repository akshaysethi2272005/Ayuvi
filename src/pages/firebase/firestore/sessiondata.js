import React from "react";
import app from "../firebase";
import { getFirestore , addDoc, getDocs , collection } from "firebase/firestore";
function WriteFSession(id , name ,e , phone){
    const firebase = getFirestore(app);
    try {
        const docRef = addDoc(collection(firebase, "session"), {
            name : name,
            email: e,
            phone : phone,
            id:id,
        });
    } catch (e) {
        console.error("Error adding document");
    }
}
export default WriteFSession;