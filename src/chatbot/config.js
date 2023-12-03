// import { createChatBotMessage } from 'react-chatbot-kit';

// const config = {
//   initialMessages: [createChatBotMessage(`Hey there,`)],
// };

// export default config;

// config.js// config.js
// in config.js

import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Guide bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`),createChatBotMessage('Press 1 for page navigation'),createChatBotMessage('Press 2 for direct information access'),createChatBotMessage('Press 0 to delete history')],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;





