import React, { useState } from 'react';
import Tab from '../components/Tab';
import MessageForm from '../components/MessageForm';
import MessageDisplay from '../components/MessageDisplay';
import MessageHistory from '../components/MessageHistory';

const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    const [messageArray, setMessageArray] = useState([]);
    const [tab, setTab] = useState('Tab 1:');
    
    const youveGotMail = (newMesssage) => {
        console.log("This is from my message form component: ", newMesssage);
        setCurrentMsg(newMesssage);
        setMessageArray([...messageArray, newMesssage]);
    };
    
    return (
        <div>
            <Tab isActive={tab === 'Tab 1: '} onClick={() => setTab('Tab 1:')}>
                Tab 1
            </Tab>
            <Tab isActive={tab === 'Tab 2:'} onClick={() => setTab('Tab 2:')}>
                Tab 2
            </Tab>
            <Tab isActive={tab === 'Tab 3:'} onClick={() => setTab('Tab 3:')}>
                Tab 3
            </Tab>

            <MessageForm onNewMessage={youveGotMail}/>
            <MessageDisplay tab={ tab } message={ currentMsg }/>
            <MessageHistory messageArray={messageArray} />
        </div>
    );
}

export default MessageBoard;