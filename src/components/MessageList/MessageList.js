import './MessageList.css'
import { TextField, useTheme, Button, Card, Box } from "@material-ui/core";
import { useRef, useEffect } from 'react';




const MessageList = ({ arr, addMessage, onChange }) => {
  const theme = useTheme();
  const inputRef = useRef(null);

  const handleChange = ((e) => {
    return onChange(e.target.value);
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  return (
    <>
      {arr ?
        <Card variant="outlined" >

          <ul className='messagesList'>
            {
              arr.map((item, index) => (
                <li key={index}>{item.author}: {item.text}</li>
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
              onChange={handleChange}
            />
            <Button variant="contained" onClick={addMessage} >Enter</Button>
          </Box>
        </Card >
        : null}
    </>
  );
};

export default MessageList;