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
    setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
    setInput('');
    setShowIntro(false); 

    
    await handleAIResponse(input);
  };

  const handleAIResponse = async (userMessage) => {
    try {
      
      const conversation = [
        { role: 'user', content: userMessage },
        ...messages.map((msg) => ({ role: msg.sender, content: msg.text })),
      ];

      
      console.log('Conversation:', conversation);

      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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', // Replace with your OpenAI API key
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: conversation,
        }),
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
      {(showIntro || messages.length === 0) && (
        <div className="IntroSection">
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg" alt="Logo"  className='bison'/>
          <p>How can I help you today?</p>
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
            placeholder="Type a message..."
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