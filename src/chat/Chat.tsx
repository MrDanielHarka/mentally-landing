import { useReducer } from 'react';
import { ChatActionType, ChatState, chatReducer } from '../state/chatReducer';
import { ChatInputField } from './chat-input-field/ChatInputField';
import { MessageBubble } from './chat-message/ChatMessage';

const initialChatState: ChatState = {
  messages: [],
};

export function Chat() {
  const [state, dispatch] = useReducer(chatReducer, initialChatState);

  const sendMessage = (message: string) => {
    dispatch({ type: ChatActionType.SendMessage, message });
  };

  return (
    <div>
      {state.messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      <ChatInputField onSend={sendMessage} />
    </div>
  );
}
