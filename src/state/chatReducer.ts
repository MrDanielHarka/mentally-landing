export enum ChatActionType {
  SendMessage = 'ADD_MESSAGE',
}

export interface ChatAction {
  type: ChatActionType;
  message: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  dateTime: Date;
}

export interface ChatState {
  messages: ChatMessage[];
}

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  const { type, message } = action;
  switch (type) {
    case ChatActionType.SendMessage:
      return {
        ...state,
        messages: [...state.messages, { id: '1', text: message, dateTime: new Date() }],
      };
  }
}
