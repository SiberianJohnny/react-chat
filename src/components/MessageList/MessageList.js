import listStyle from './MessageList.css'

const MessageList = ({ arr, addMessage }) => {
  if (arr) {
    return (
      <>
        <ul className='messagesList'>
          {
            arr.map((item) => (
              <li key={item.id}>{item.author}: {item.text}</li>
            ))
          }
        </ul>
        <form>
          <input id="message-input" placeholder='Введите сообщение'></input>
          <button onClick={addMessage} > Enter </button>
        </form>
      </>
    );
  };
};

export default MessageList;