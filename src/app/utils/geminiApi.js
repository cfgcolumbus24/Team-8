export const getTopMatches = async (baseProfile, profiles, apiKey) => {
    try {
      const response = await fetch('https://api.gemini.com/match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          baseProfile,
          profiles
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch matches from Gemini API');
      }
  
      const data = await response.json();
      return data.topMatches.slice(0, 3); // Return the top 3 matches
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  