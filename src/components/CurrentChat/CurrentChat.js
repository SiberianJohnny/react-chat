import { useState, useEffect } from 'react';
import MessageList from '../MessageList/MessageList';
import { useParams } from "react-router-dom";

const CurrentChat = ({ chats, someProp }) => {
  const { chatId } = useParams();

  const allChatMessages = chats.map((item) => (
    item.messages
  ))

  const [allMessages, setAllMessages] = useState(allChatMessages)

  let msgText = '';
  const eventhandler = data => {
    msgText = data;
  }


  const addMsg = (e) => {
    const currentChat = chats[chatId];
    const newMsg = {
      id: chatId,
      name: currentChat.name,
      message: [{ text: msgText, author: currentChat.user }]
    };
    e.preventDefault();
    setAllMessages(prev => [...prev, newMsg.message]);
    someProp(newMsg)
  };

  useEffect(() => {
    if (allMessages.length > 0 && allMessages[allMessages.length - 1].author !== 'Bot') {
      const newMsg = {
        text: 'Привет, ' + allMessages[allMessages.length - 1].author + '. Я фиксированное сообщение.',
        author: 'Bot'
      };
      setTimeout(() => {

        setAllMessages(prev => [...prev, newMsg]);
      }, 1500);
    }
  }, [allMessages]);

  return (
    <>
      <MessageList arr={allMessages[chatId]} addMessage={addMsg} onChange={eventhandler} />
    </>
  );
};

export default CurrentChat;