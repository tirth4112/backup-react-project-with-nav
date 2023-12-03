import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Component/Header';
import Menu from '../Component/Menu';
import Footer from '../Component/Footer';
import Dashboard from '../Component/Dashboard';
import { ActiveRouteProvider } from '../Component/ActiveRouteContext';
import config from '../chatbot/config.js';
import MessageParser from '../chatbot/MessageParser.jsx';
import ActionProvider from '../chatbot/ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { ThemeProvider } from 'styled-components';

const StyledChatbot = styled(Chatbot)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  margin: 20px auto;
`;

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 100px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const AdminMain = () => {
  const dynamicMenuData = JSON.parse(sessionStorage.getItem('routes'));
  const [chatSteps, setChatSteps] = useState([]);
  const [chatVisible, setChatVisible] = useState(false);
 
  useEffect(() => {

  }, []);

  if (dynamicMenuData == null) {
    // If the user is not authenticated, navigate to the login page
    return <Navigate to="/login" />;
  }

 
  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const cancelChat = () => {
    setChatVisible(false);
  };

  const theme = {
    background: '#3e3e42',
    headerBgColor: '#252526',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#007acc',
    userFontColor: 'white',
    chatContainerBorderRadius: '8px',
    chatContainerBoxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    userBubbleBorderRadius: '10px',
    botBubbleBorderRadius: '10px',
    bubbleMaxWidth: '70%',
    inputAreaBackgroundColor: '#252526',
    inputAreaPadding: '10px',
    sendButtonBackgroundColor: '#007acc',
    sendButtonColor: 'white',
    sendButtonPadding: '8px 12px',
    sendButtonBorderRadius: '5px',
    sendButtonHoverBackground: '#005682',
  };


  return (
    <div>
      <ActiveRouteProvider>
        <Header />
        <Menu menuData={dynamicMenuData} />
        <Dashboard />
        <ThemeProvider theme={theme}>
        <ChatContainer>
  {chatVisible ? (
    <>
    
      <StyledChatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        visible={chatVisible}
        cancelChat={toggleChat}
      />
    </>
  ) : (
    <ChatButton onClick={toggleChat}>Chat</ChatButton>
  )}
</ChatContainer>
</ThemeProvider>
        <Footer />
      </ActiveRouteProvider>
    </div>
  );
};

export default AdminMain;

