import { useState, useEffect } from 'react'
import MessageList from './MessageList/MessageList.js';


const messagesArr = [];



function App() {
  useEffect(() => {
    console.log(messagesArr);
  });

  const [allMessages, setAllMessages] = useState(messagesArr)
  const addMsg = (e) => {
    const newMsg = {
      id: messagesArr.length + 1,
      text: document.getElementById('message-input').value,
      author: 'Guest'
    };
    e.preventDefault();
    setAllMessages(prev => [...prev, newMsg])
  };


  return (
    <div >
      <MessageList arr={allMessages} addMessage={addMsg} />
    </div>
  );
}

export default App;
