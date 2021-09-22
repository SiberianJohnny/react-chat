import './MessageList.css'
import { TextField, useTheme, Button, Card, Box } from "@material-ui/core";
import { useRef, useEffect } from 'react';




const MessageList = ({ arr, addMessage }) => {
  const theme = useTheme();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (arr) {
    return (
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
            id="message-input"
            placeholder='Введите сообщение'
            style={{
              margin: '20px',
              backgroundColor: theme.palette.primary.main,
              borderColor: theme.palette.secondary.main,
            }}
            variant="outlined"
          />
          <Button variant="contained" onClick={addMessage} >Enter</Button>
        </Box>
      </Card >
    );
  };
};

export default MessageList;