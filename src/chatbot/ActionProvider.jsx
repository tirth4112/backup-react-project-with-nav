import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleApiResponse = (response) => {
    console.log(response);
    const botMessage = createChatBotMessage(response);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const showButtons = (buttons) => {
    // Assuming you have a function to handle button clicks and store data in session
    buttons.forEach((button) => {
      // For each button, create an action to handle the click
      const action = () => {
        // Handle the button click, e.g., store data in session
        sessionStorage.setItem('selectedOption', button.label);
        console.log(`Button "${button.label}" clicked!`);
        // Add your logic to delete session on 'exit' click
        if (button.label.toLowerCase() === 'exit') {
          sessionStorage.removeItem('selectedOption');
        }
      };

      // Create a button message and add it to the chat
      const buttonMessage = createChatBotMessage(button.label, { widget: 'button', action });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, buttonMessage],
      }));
    });
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleApiResponse,
            showButtons,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
