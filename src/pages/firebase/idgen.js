import React from "react";
const EntryId = () => {
    const Randint = (max) => {
        return Math.floor(Math.random() * (Math.floor(max)+ 1));
    }
    var num = "0123456789";
    var final = ""
    for (var j = 0; j < 10; j++) {
        final += num[Randint(9)]
    }
    return final
}
export default EntryId;