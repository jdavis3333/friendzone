import React, { useState, useEffect } from "react";
import API from "../utils/API";


const Chat = () => {
    // useEffect(() => { loadChats() }, []);

    // const loadChats = () => {
    //     API.getChats()
    //     .then(res => {
    //         console.log(res)})
    // };
    function handleClick(){
        API.postChat({user1: 1, user2: 3})
        .then(res => console.log(res))
    }
    return (
        <div>
            <button onClick = {handleClick}></button>
        </div>
    )
}
export default Chat;