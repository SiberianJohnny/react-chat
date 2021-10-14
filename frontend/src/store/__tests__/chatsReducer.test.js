import chatsReducer from '../chatsReducer';


const initialState = null;
const chat1 = 'chat1'

describe('chats reducer tests', () => {
  it('should return the initial state', () => {
    expect(chatsReducer(initialState, {})).toBeNull();
  });
  it('should return chat name in state', () => {
    expect(chatsReducer(chat1, {})).toEqual('chat1');
  });
});

