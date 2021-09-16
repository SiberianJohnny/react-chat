import { useState, useEffect } from 'react'
import MessageList from './MessageList/MessageList.js';





function App() {
  useEffect(() => {
    console.log(allMessages);
  });

  const [allMessages, setAllMessages] = useState([])
  const addMsg = (e) => {
    const newMsg = {
      id: allMessages.length + 1,
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
