const { processQuery } = require('../utils/nlpEngine');
const { executeQuery } = require('../utils/queryExecutor');

async function chat(req, res) {
    try {
        const { message, history = [] } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message required' });
        }

        console.log(`\n${'='.repeat(80)}`);
        console.log(`💬 USER: ${message}`);
        console.log(`${'='.repeat(80)}`);

        // 1. Process the query with NLP
        const queryPlan = processQuery(message);

        // 2. Execute the query and get natural response
        const result = await executeQuery(queryPlan, message);

        // 3. Return the response
        const updatedHistory = [
            ...history,
            { role: 'user', content: message },
            { role: 'assistant', content: result.response }
        ].slice(-10);

        console.log(`\n💬 RESPONSE:`);
        console.log(result.response);
        console.log(`${'='.repeat(80)}\n`);

        res.json({
            reply: result.response,
            history: updatedHistory,
            confidence: queryPlan.confidence,
            intent: queryPlan.intent
        });

    } catch (error) {
        console.error('❌ Error:', error);
        res.status(500).json({
            reply: "I'm having trouble connecting right now. Please try again in a moment."
        });
    }
}

module.exports = { chat };