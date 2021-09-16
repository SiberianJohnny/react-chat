import { useState, useEffect } from 'react'
import MessageList from './MessageList/MessageList.js';





function App() {
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


  useEffect(() => {
    if (allMessages.length > 0 && allMessages[allMessages.length - 1].author !== 'Bot') {
      const newMsg = {
        id: allMessages.length + 1,
        text: 'Привет, ' + allMessages[allMessages.length - 1].author + '. Я фиксированное сообщение.',
        author: 'Bot'
      };
      setTimeout(() => {

        setAllMessages(prev => [...prev, newMsg]);
      }, 1500);
    }
  }, [allMessages]);

  return (
    <div >
      <MessageList arr={allMessages} addMessage={addMsg} />
    </div>
  );
}

export default App;
