import React, { useState } from 'react';

const MessageForm2 = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg)
        setMsg("")
    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Messenger</h1>

            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
            <br />
            <input type="submit" value="Send Message" />
        </form>
    );
};

export default MessageForm2;


