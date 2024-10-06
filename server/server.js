// server/server.js
const express = require('express');
const LangGraph = require('langgraph');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

const langgraph = new LangGraph({ apiKey: 'your-api-key' });

app.use(express.json());

app.post('/api/parse-resume', upload.single('resume'), (req, res) => {
  // Use LangGraph CoAgent for Resume Evaluation
  langgraph.invokeAgent('resume_eval_agent', { resume: req.body.resume })
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
