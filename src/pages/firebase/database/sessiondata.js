import React from "react";
import app from "../firebase";
import { getDatabase , set , ref} from "firebase/database";
const WriteSession = (a,b,c,i) => {
    const database = getDatabase(app);
    set(ref(database, 'session/'+a+i+"/"), {
        username: a.toString(),
        email: b.toString(),
        phone : c.toString(),
        SGID: i.toString()
    });
}
export default WriteSession;