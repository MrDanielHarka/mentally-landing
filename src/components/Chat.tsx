import React, { useReducer, useState } from 'react';
import { ChatActionType, ChatState, chatReducer } from '../state/chatReducer';

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
    <div>
      <ul>
        {state.messages.map((msg, index) => (
          <li key={index}>
            <b>{msg.dateTime.toDateString()}:</b> {msg.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleInputSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
