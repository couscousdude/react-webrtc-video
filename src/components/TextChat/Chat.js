import React from 'react';
import ChatContainer from './ChatContainer';
import ChatBoxes from './ChatBoxes';
import MessageBox from './MessageBox';
import MessageIcon from '@material-ui/icons/Message';

const Chat = () => {
    const messageBoxRef = React.useRef(null);

    React.useEffect(() => {
        messageBoxRef.current.scrollIntoView({behavior: 'smooth'});
    });

    return (
        <>
            <ChatContainer>
                <ChatBoxes 
                    messages={[{msgContent: 'testing', sender: 'test user'}, {msgContent: 'testing', sender: 'test user'}, {msgContent: 'asdfsaadsf', sender: 'test user'}, {msgContent: 'asdfasfd', sender: 'test user'}, {msgContent: 'asdfadsf', sender: 'test user'},{msgContent: 'testing', sender: 'test user'}, {msgContent: 'asdffa', sender: 'test user'}]}
                />
                <div ref={messageBoxRef}>
                    <MessageBox />
                </div>
            </ChatContainer>
        </>
    );
}

export default Chat;    