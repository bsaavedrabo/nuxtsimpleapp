// composables/useChatgpt.ts
export function useChatgpt() {
    // Hardcoded API key for testing
    const apiKey = 'sk-proj-61VAehfTDPn0KJUxEviwT3BlbkFJW1HZwWYeVS8RRGBtLX44'  
  
    const chatCompletion = async (messages: Message[]): Promise<ChatCompletionResponse['choices']> => {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages
          })
        })
  
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error: ${response.statusText}. Details: ${errorText}`);
        }
  
        const data: ChatCompletionResponse = await response.json()
        return data.choices
      } catch (error) {
        console.error('API Request Error:', error);
        throw error;
      }
    }
  
    return { chatCompletion }
  }
  