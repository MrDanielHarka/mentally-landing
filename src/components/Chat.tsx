import React, { useReducer, useState } from 'react';
import { ChatActionType, ChatState, chatReducer } from '../state/chatReducer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { createTheme } from '@mui/material/styles';


const theme = createTheme();

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: theme.spacing(2),
}));

const Messages = styled('div')(({ theme }) => ({
  flexGrow: 1,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  border: '1px solid #ccc',
  borderRadius: theme.shape.borderRadius,
  overflowY: 'auto',
}));

const Input = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const initialChatState: ChatState = {
  messages: []
};

export function Chat() {
  const [state, dispatch] = useReducer(chatReducer, initialChatState);
  const [input, setInput] = useState('');

  const sendMessage = (user: string, message: string) => {
    dispatch({ type: ChatActionType.SendMessage, message });
    setInput('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sendMessage('user1', input);
  };

  return (
    <Root>
      <Messages>
        {state.messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </Messages>
      <Input
        label="Type your message"
        variant="outlined"
        value={input}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" onClick={handleInputSubmit}>
        Send
      </Button>
    </Root>
  );
};
