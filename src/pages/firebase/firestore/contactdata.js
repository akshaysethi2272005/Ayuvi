import React from "react";
import app from "../firebase";
import { getFirestore , addDoc, getDocs , collection } from "firebase/firestore";
function WriteCFire(id , name ,phone , re){
    const firebase = getFirestore(app);
    try {
        const docRef = addDoc(collection(firebase, "contact"), {
            name : name,
            phone : phone,
            mesage:re,
            cid:id,
        });
    } catch (e) {
        console.error("Error adding document");
    }
}
export default WriteCFire;