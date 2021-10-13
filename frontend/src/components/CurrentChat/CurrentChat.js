import { useEffect } from 'react';
import MessageList from '../MessageList/MessageList';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addBotMessage, addMessage, fetchMessages } from '../../actions/messagesActions';

const CurrentChat = () => {
  const { chatId } = useParams();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  const allMessages = useSelector((state) => state.messagesReducer.messageList);
  const dispatch = useDispatch();

  const onAddMessage = (message, someAuthor) => {
    const author = someAuthor || 'Me';
    dispatch(addMessage(chatId, message, author));
  };

  // useEffect(() => {
  //   const lastMessage = allMessages[chatId];
  //   dispatch(addBotMessage(lastMessage, chatId))
  // }, [allMessages]);

  return (
    <>
      <MessageList arr={allMessages[chatId]} addMessage={onAddMessage} />
    </>
  );
};

export default CurrentChat;