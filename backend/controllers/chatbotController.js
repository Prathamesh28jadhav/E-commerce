const getChatbotResponse = (req, res) => {
    const { query } = req.body;
    let response;
  
    if (query.includes('price')) {
      response = 'The price of vegetables depends on the type and quantity.';
    } else if (query.includes('fresh')) {
      response = 'All our vegetables are fresh and locally sourced!';
    } else {
      response = 'Sorry, I did not understand your question.';
    }
  
    res.json({ response });
  };
  
  module.exports = { getChatbotResponse };
  