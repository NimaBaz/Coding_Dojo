import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [approve, setApprove] = useState(false)
    const [username, setUserName] = useState("")
    const [input, setInput] = useState("")

    const [messages, setMessages] = useState([])

    const [socket] = useState(() => io(":8000"));

    useEffect(() => {
        console.log("Is this running?");
        socket.on("post chat", (msg) => {setMessages(prevMsgState => [...prevMsgState, msg])});
        return () => socket.removeAllListeners();
    }, [socket]);

    const usernameHandler = (e) => {
        e.preventDefault()
        if(username){
            setApprove(true)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        socket.emit("chat", {username: username, content: input})
        setInput("")
    }


    return (
        <div className='main'>
            <h1>Socket io Lecture</h1>
            {
                !approve ? 
                <form onSubmit={usernameHandler}>
                    <label>Enter your name:</label>
                    <input type="text" className='form-control' value={username} onChange={e => setUserName(e.target.value)} />
                    <button className='btn btn-outline-dark'>Enter</button>
                </form>

                :
                <div className='chat-input'>
                    <form onSubmit={submitHandler}>
                    <input type="text" className='form-control' value={input} onChange={e => setInput(e.target.value)} />
                    <button className='btn btn-outline-dark'>Send Message</button>
                    </form>

                    <div className='chats'>
                        <div className='card text-center'>
                            <div className='card-header'>
                            You've Got mail
                            </div>
                            <div className='card-body'>
                            {
                                messages.map((msg, i) => (<p key={i}>{msg.username}: {msg.content} </p>) )
                            }
                            </div>
                            <div className='card-footer text-muted'>
                                Socket IO
                            </div>

                        </div>
                    </div>


                </div>
            }
        </div>
    )
}

export default Chat