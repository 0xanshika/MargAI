import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "MargAI"
        },
        body: JSON.stringify({
          model: "openrouter/auto",
          messages: [
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    );

    const data = await response.json();

    // ✅ DEBUG (see real API response)
    console.log("OpenRouter response:", data);

    // ✅ HANDLE API ERRORS SAFELY
    if (!response.ok || data.error) {
      console.error("OpenRouter API Error:", data.error);
      return "AI service is temporarily unavailable.";
    }

    // ✅ SAFE ACCESS (NO CRASH)
    if (!data.choices || data.choices.length === 0) {
      return "No response generated.";
    }

    return data.choices[0].message.content;

  } catch (err) {
    console.error("Fetch error:", err);
    return "Failed to contact AI service.";
  }
};

export default getOpenAIAPIResponse;