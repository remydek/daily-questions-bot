
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

async function generateQuestions() {
  const questions = [
    "🎯 How has your view of success changed since moving to Bali?",
    "🚀 What's next for Augmento that excites you most?",
    "❤️ How does Isabel inspire your creativity?",
    "🧠 What belief about AR has completely changed since starting Augmento?",
    "🌅 Which Bali morning ritual would you never give up?"
  ];
  return questions;
}

async function sendMessage() {
  const questions = await generateQuestions();
  const message = `🌅 Morning Deep Thoughts\n\n${questions.join("\n\n")}\n\n/save - Keep favorites\n/more - Get more questions`;
  
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });
}

sendMessage();
