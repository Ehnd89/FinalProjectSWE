import fetch from 'node-fetch';

export const getOpenAIResponse = async (conversation) => {
  try {
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

    if (!response.ok) {
      throw new Error('Failed to fetch AI response');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching AI response:', error.message);
    throw error;
  }
};