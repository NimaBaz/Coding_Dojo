import React from 'react';

const MessageHistory = (props) => {
    return (
        <div>
            <h1>Message History</h1>
            {
                props.messageArray.map((message, i) => {
                    return (
                        <div key={i}>
                            {message}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MessageHistory;