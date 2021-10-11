import { useEffect } from 'react';
import MessageList from '../MessageList/MessageList';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addBotMessage, addMessage } from '../../actions/messagesActions';

const CurrentChat = () => {
  const { chatId } = useParams();

  const allMessages = useSelector((state) => state.messagesReducer.messageList);
  const dispatch = useDispatch();

  const onAddMessage = (message) => {
    dispatch(addMessage(chatId, message));
  };

  useEffect(() => {
    const lastMessage = allMessages[chatId];
    dispatch(addBotMessage(lastMessage, chatId))
  }, [allMessages]);

  return (
    <>
      <MessageList arr={allMessages[chatId]} addMessage={onAddMessage} />
    </>
  );
};

export default CurrentChat;