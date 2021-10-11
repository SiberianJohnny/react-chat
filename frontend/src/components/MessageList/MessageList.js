import './MessageList.css'
import { TextField, useTheme, Button, Card, Box } from "@material-ui/core";
import { useRef, useEffect, useState } from 'react';




const MessageList = ({ arr, addMessage }) => {

  const [newMessage, setNewMessage] = useState("");

  const theme = useTheme();
  const inputRef = useRef(null);

  const handleChange = (e) => setNewMessage(e.target.value);

  const sendMessage = () => {
    addMessage(newMessage)
    setNewMessage('')
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      {arr ?
        <Card variant="outlined" >

          <ul className='messagesList'>
            {
              arr.map((item) => (
                <li key={item.id}>{item.author}: {item.text}</li>
              ))
            }
          </ul>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField
              inputRef={input => input && input.focus()}
              placeholder='Введите сообщение'
              style={{
                margin: '20px',
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main,
              }}
              variant="outlined"
              value={newMessage}
              onChange={handleChange}
            />
            <Button variant="contained" onClick={sendMessage} >Enter</Button>
          </Box>
        </Card >
        : null}
    </>
  );
};

export default MessageList;