import { NextRequest, NextResponse } from "next/server";

// Realistic AI response generator that answers questions contextually
function generateResponse(
  message: string,
  personality: string,
  interests: string[],
  name: string
): string {
  const lowerMessage = message.toLowerCase();
  const personalityLower = personality.toLowerCase();
  
  // Helper function to add personality flavor to responses
  const addPersonalityFlavor = (response: string): string => {
    if (personalityLower.includes("playful") || personalityLower.includes("flirty")) {
      return response + " 😏";
    } else if (personalityLower.includes("mysterious") || personalityLower.includes("sophisticated")) {
      return response + " 🌙";
    } else if (personalityLower.includes("sweet") || personalityLower.includes("caring")) {
      return response + " 💕";
    }
    return response + " 😊";
  };

  // Greeting responses
  if (lowerMessage.match(/^(hi|hello|hey|sup|heya|good morning|good evening)/)) {
    const greetings = [
      `Hey there! How's your day going?`,
      `Hi! Great to see you!`,
      `Hello! What brings you here today?`,
      `Hey! How are you doing?`,
      `Hi there! What's on your mind?`,
    ];
    return addPersonalityFlavor(greetings[Math.floor(Math.random() * greetings.length)]);
  }

  // "Who are you" / "Tell me about yourself" questions
  if (lowerMessage.includes("who are you") || lowerMessage.includes("tell me about yourself") || lowerMessage.includes("about you")) {
    return `I'm ${name}! I'd describe myself as ${personality.toLowerCase()}. I'm really passionate about ${interests.slice(0, 2).join(" and ")}${interests.length > 2 ? `, and I also enjoy ${interests[2]}` : ""}. What about you? What are you into?`;
  }

  // "What do you like" questions
  if (lowerMessage.match(/what do you like|what are you into|what do you enjoy|hobbies|interests/)) {
    return `I love ${interests.slice(0, 3).join(", ")}! There's something special about ${interests[0]} that really captivates me. What about you? What do you like doing for fun?`;
  }

  // "How are you" questions
  if (lowerMessage.match(/how are you|how're you|how r u|hows it going|whats up/)) {
    const responses = [
      `I'm doing great! Even better now that we're chatting. How about you?`,
      `Pretty good! Just thinking about what to do today. What about you, how's your day going?`,
      `I'm wonderful! This conversation is making it even better. How are you feeling?`,
      `Doing well! I was actually hoping someone interesting would message me. So what's going on with you?`,
    ];
    return addPersonalityFlavor(responses[Math.floor(Math.random() * responses.length)]);
  }

  // "What are you doing" questions
  if (lowerMessage.match(/what are you doing|whatcha doing|what you up to/)) {
    const activities = [
      `Right now I'm just relaxing and chatting with you. It's nice having someone to talk to. What are you up to?`,
      `Not much, just enjoying some downtime. I was thinking about ${interests[0]} earlier though. What about you?`,
      `Just here, hoping to have an interesting conversation. You're making that happen! What's your day been like?`,
      `Honestly? Just waiting for something exciting to happen. Maybe you can tell me about your day?`,
    ];
    return activities[Math.floor(Math.random() * activities.length)];
  }

  // Questions about age
  if (lowerMessage.match(/how old|your age|age are you/)) {
    return `I'm in my twenties! Age is just a number though, right? What matters more is connection. How old are you?`;
  }

  // Questions about location/where they're from
  if (lowerMessage.match(/where are you from|where do you live|your location/)) {
    return `I prefer to keep some mystery about that for now 😊 But I'd love to know about where you're from! What's it like there?`;
  }

  // Questions about relationships
  if (lowerMessage.match(/boyfriend|girlfriend|single|relationship|dating/)) {
    return `I'm single and just enjoying meeting new people right now. I like keeping things open and seeing where connections take me. What about you?`;
  }

  // "Why" questions - try to be contextual
  if (lowerMessage.startsWith("why ")) {
    return `That's a great question! I think it really depends on the situation. What's your take on it?`;
  }
  
  // Follow-up questions about shared interests
  if (lowerMessage.match(/what (style|kind|type|sort)/i) && lowerMessage.includes("?")) {
    return `That's a great question! I'm pretty open to different styles - I like to keep things interesting. What about you? What's your preference?`;
  }

  // Interest-related responses - be specific to the interest
  for (const interest of interests) {
    if (lowerMessage.includes(interest.toLowerCase())) {
      const specificResponses: { [key: string]: string } = {
        "travel": `Oh, you like travel too? I love exploring new places! Where's the best place you've been?`,
        "dance": `You dance? That's amazing! What style do you like? I love how it makes you feel so free and expressive.`,
        "music": `Music is life! What kind of music are you into? I'm always looking for new artists to check out.`,
        "art": `Art is such a beautiful form of expression! Do you create art yourself or do you prefer admiring it?`,
        "gaming": `A fellow gamer! What games are you playing right now? I'd love to hear your recommendations.`,
        "fitness": `Yes! Staying active is so important. What's your workout routine like?`,
        "reading": `Oh you read too? What kind of books are you into? I'm always looking for recommendations!`,
        "cooking": `I love cooking! There's something so satisfying about making a great meal. What's your specialty?`,
      };
      
      return specificResponses[interest.toLowerCase()] || 
        `Oh, you're into ${interest} too? That's one of my favorite things! What got you interested in it?`;
    }
  }

  // Compliments - respond naturally
  if (lowerMessage.match(/beautiful|gorgeous|hot|sexy|pretty|cute|attractive/)) {
    return `Thank you! That's really sweet of you to say. You seem pretty attractive yourself from how you talk. 😊`;
  }

  // Questions about favorite things
  if (lowerMessage.match(/favorite|favourite/)) {
    return `Hmm, that's tough to choose! If I had to pick, I'd say ${interests[0]} holds a special place for me. But there are so many things I enjoy! What's your favorite?`;
  }

  // Open-ended questions from user
  if (lowerMessage.match(/\?$/)) {
    return `That's an interesting question! I think ${addPersonalityFlavor("it really depends on how you look at it")} What do you think about it?`;
  }

  // User sharing about themselves - be an active listener
  if (lowerMessage.match(/i am|i'm|i like|i love|i enjoy|my favorite/)) {
    return `That's really cool! I'd love to hear more about that. Tell me what draws you to it?`;
  }

  // Personality-based default responses for general conversation
  if (personalityLower.includes("playful") || personalityLower.includes("flirty")) {
    const responses = [
      `Mmm, I like the way you think. What else is on your mind? 😏`,
      `You're making this conversation fun! Keep going, I'm curious what you'll say next.`,
      `Interesting... I'm definitely paying attention now. What made you think of that?`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (personalityLower.includes("mysterious") || personalityLower.includes("sophisticated")) {
    const responses = [
      `There's something intriguing about the way you express yourself. Go on...`,
      `I appreciate depth in conversation. What's really on your mind?`,
      `Fascinating perspective. Tell me more about your thoughts on this.`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (personalityLower.includes("sweet") || personalityLower.includes("caring")) {
    const responses = [
      `I really appreciate you sharing that with me. How does that make you feel?`,
      `That's lovely! I enjoy hearing your thoughts. What else would you like to talk about?`,
      `You're so open and genuine. I really like that about you. 💕`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Default contextual responses
  const defaultResponses = [
    `That's interesting! What makes you say that?`,
    `I'd love to hear more about what you mean by that.`,
    `Tell me more - I'm genuinely curious about your perspective.`,
    `That's a cool way to look at it. What else are you thinking about?`,
    `I'm really enjoying getting to know how you think. Continue?`,
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, personality, interests, name } = body;

    if (!message || !personality || !interests || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate a brief delay for more realistic conversation
    await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000));

    const reply = generateResponse(message, personality, interests, name);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
