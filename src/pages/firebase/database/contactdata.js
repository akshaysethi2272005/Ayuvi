import React from "react";
import app from "../firebase";
import { getDatabase , set , ref} from "firebase/database";
function WriteCData(ids,name ,  pn , re){
    const database = getDatabase(app);
    set(ref(database, 'contact/'+ ids+name+pn), {
        Cid:ids,
        username: name,
        phone: pn,
        message:re,
    }).catch(error => {
        console.log("internal error");
      })
}
export default WriteCData;