const mongoose = require('mongoose');

const chatbotQuerySchema = new mongoose.Schema({
  query: { type: String, required: true },
  response: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const ChatbotQuery = mongoose.model('ChatbotQuery', chatbotQuerySchema);

module.exports = ChatbotQuery;
