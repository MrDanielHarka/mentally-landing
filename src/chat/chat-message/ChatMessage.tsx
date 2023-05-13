import { ChatMessage } from '../../state/chatReducer';
import './ChatMessage.css'

export function MessageBubble({ message }: { message: ChatMessage }) {
  return (
    <div className="chat-message">
      <p>{message.text}</p>
    </div>
  );
}
