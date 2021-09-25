import { useEffect } from 'react';
import MessageList from '../MessageList/MessageList';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../actions/messagesActions';

const CurrentChat = () => {
  const { chatId } = useParams();

  const allMessages = useSelector((state) => state.messagesReducer.messageList);
  const dispatch = useDispatch();

  const onAddMessage = (message) => {
    dispatch(addMessage(chatId, message));
  };

  useEffect(() => {
    const lastMessage = allMessages[chatId];
    if (lastMessage && lastMessage[lastMessage.length - 1].author !== 'Bot') {
      const newMsg = {
        text: 'Привет, ' + lastMessage[lastMessage.length - 1].author + '. Я фиксированное сообщение.',
        author: 'Bot'
      };
      setTimeout(() => {
        dispatch(addMessage(chatId, newMsg.text, newMsg.author));
      }, 1500);
    }
  }, [allMessages]);

  return (
    <>
      <MessageList arr={allMessages[chatId]} addMessage={onAddMessage} />
    </>
  );
};

export default CurrentChat;