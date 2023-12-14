import React, { useState } from 'react';
import './chat.css';

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    const userMessage = input;

    // Append the user's message to the conversation
    const updatedMessages = [...messages, { text: userMessage, sender: 'user' }];
    setMessages(updatedMessages);
    setInput('');
    setShowIntro(false);

    // Send the entire conversation history to OpenAI
    await handleAIResponse(updatedMessages);
  };

  const handleAIResponse = async (conversation) => {
    try {
      console.log('Conversation:', conversation);

      const payload = {
        model: 'gpt-3.5-turbo',
        messages: conversation.map((msg) => ({ role: msg.sender === 'user' ? 'user' : 'assistant', content: msg.text })),
      };

      console.log('OpenAI Request Payload:', payload);

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify(payload),
      });

      console.log('OpenAI Response:', response);

      if (!response.ok) {
        throw new Error('Failed to fetch AI response');
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      setMessages((prevMessages) => [...prevMessages, { text: aiResponse, sender: 'advisor' }]);
    } catch (error) {
      console.error('Error fetching AI response:', error.message);
    }
  };

  return (
    <div className="ChatContainer">
      {showIntro && (
        <div className="IntroSection">
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg" alt="Logo" />
          <p>Hello! How can I assist you today?</p>
        </div>
      )}
      <div className="ChatBox">
        <div className="Messages">
          {messages.map((message, index) => (
            <div key={index} className={`Message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="InputBox">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;