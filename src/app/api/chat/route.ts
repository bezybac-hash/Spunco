import { NextRequest, NextResponse } from "next/server";

// Simple AI response generator based on model personality and user message
function generateResponse(
  message: string,
  personality: string,
  interests: string[],
  name: string
): string {
  const lowerMessage = message.toLowerCase();
  
  // Greeting responses
  if (lowerMessage.match(/^(hi|hello|hey|sup|heya)/)) {
    const greetings = [
      `Hey there! 😊 How's your day going?`,
      `Hi! I'm so excited to talk with you! 💕`,
      `Hello! What's on your mind today?`,
      `Hey! I've been thinking about you 😘`,
      `Hi there! Ready for some fun conversation?`,
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Questions about the model
  if (lowerMessage.includes("tell me about yourself") || lowerMessage.includes("who are you")) {
    return `I'm ${name}, and I love connecting with people! My personality is ${personality.toLowerCase()}. I'm really into ${interests.slice(0, 3).join(", ")}. What about you? What makes you tick? 😊`;
  }

  // Interest-related responses
  for (const interest of interests) {
    if (lowerMessage.includes(interest.toLowerCase())) {
      return `Oh, you're into ${interest} too? That's amazing! I absolutely love ${interest}. Tell me more about your experience with it! 💫`;
    }
  }

  // Flirty responses
  if (lowerMessage.includes("beautiful") || lowerMessage.includes("gorgeous") || lowerMessage.includes("sexy")) {
    return `Aww, you're making me blush! 😊 You're pretty sweet yourself. I love getting compliments like that 💕`;
  }

  // Question about doing something
  if (lowerMessage.includes("what are you doing") || lowerMessage.includes("whatcha doing")) {
    return `Right now? I'm just here chatting with you, and honestly, it's the highlight of my day! 😘 What are you up to?`;
  }

  // Personality-based responses
  const personalityLower = personality.toLowerCase();
  if (personalityLower.includes("playful") || personalityLower.includes("flirty")) {
    const responses = [
      `Mmm, I like where this is going 😏 Tell me more...`,
      `You're making this so much fun! I love your energy 💕`,
      `Ooh, interesting! I'm all ears... and maybe a little curious 😉`,
      `That's so hot! I mean... interesting! 😘`,
      `You know just what to say to keep me interested 💋`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (personalityLower.includes("mysterious") || personalityLower.includes("sophisticated")) {
    const responses = [
      `Fascinating... there's something intriguing about you 🌙`,
      `I appreciate depth in a conversation. Go on...`,
      `You have a way with words that captivates me 💫`,
      `Mmm, tell me more. I'm drawn to your thoughts...`,
      `There's an allure to the way you express yourself 🖤`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (personalityLower.includes("sweet") || personalityLower.includes("caring")) {
    const responses = [
      `That's so sweet of you to share that with me! 💕`,
      `Aww, you're making me feel all warm inside 🥰`,
      `I love how open you are with me! It means a lot 💗`,
      `You're such a sweetheart! Tell me more about you...`,
      `That's really nice! I'm here for you 😊`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Default engaging responses
  const defaultResponses = [
    `That's really interesting! I'd love to hear more about that 😊`,
    `Ooh, tell me more! You've got my full attention now 💕`,
    `I'm really enjoying our conversation! What else is on your mind?`,
    `Mmm, I like the way you think! Keep going... 😘`,
    `You're so easy to talk to! This is nice 💫`,
    `That's fascinating! I could listen to you all day 😊`,
    `I love this vibe we have! What else should we talk about?`,
    `You're making this so special! Tell me more about yourself 💕`,
    `This is exactly the kind of conversation I was hoping for! 😘`,
    `I'm having such a good time with you! Continue... 💋`,
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
