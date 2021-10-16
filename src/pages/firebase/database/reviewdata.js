import React from "react";
import app from "../firebase";
import { getDatabase , set , ref} from "firebase/database";
function WriteData(ids,name , email , pn , re){
    const database = getDatabase(app);
    set(ref(database, 'review/'+ ids+name+pn), {
        id:ids,
        username: name,
        age: email,
        phone: pn,
        review:re,
    }).then(
        () => {
          alert("thank you for you review");
        }
    ).catch(error => {
        console.log("internal error");
      })
}
export default WriteData