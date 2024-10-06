// src/components/ResumeChat.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, Tabs, Tab } from "@material-ui/core";
import { CopilotKit } from "copilotkit";
import { CoAgent } from "langgraph";

const ResumeChat = () => {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [activeAgent, setActiveAgent] = useState("Resume Evaluation Agent");

  const agents = {
    "Resume Evaluation Agent": new CoAgent('resume_eval_agent'),
    "Job Tailoring Agent": new CoAgent('job_tailoring_agent'),
    "Interview Prep Agent": new CoAgent('interview_prep_agent')
  };

  const handleSendMessage = async () => {
    const response = await agents[activeAgent].ask(input);  // Interact with CoAgents via LangGraph
    setConversation((prev) => [...prev, { question: input, answer: response }]);
    setInput("");
  };

  const handleTabChange = (event, newValue) => {
    setActiveAgent(newValue);
  };

  return (
    <Box my={4}>
      <Typography variant="h5" align="center">Chat with AI Agents</Typography>

      {/* Agent Tabs */}
      <Tabs value={activeAgent} onChange={handleTabChange} centered>
        <Tab label="Resume Evaluation" value="Resume Evaluation Agent" />
        <Tab label="Job Tailoring" value="Job Tailoring Agent" />
        <Tab label="Interview Prep" value="Interview Prep Agent" />
      </Tabs>

      <Box my={2}>
        {conversation.map((conv, index) => (
          <Paper key={index} elevation={3} style={{ padding: '10px', marginBottom: '10px' }}>
            <Typography variant="body1"><strong>You:</strong> {conv.question}</Typography>
            <Typography variant="body2"><strong>{activeAgent}:</strong> {conv.answer}</Typography>
          </Paper>
        ))}
      </Box>

      <Box display="flex" justifyContent="center">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label={`Ask something to ${activeAgent}`}
          variant="outlined"
          fullWidth
          style={{ marginRight: "10px" }}
        />
        <Button onClick={handleSendMessage} variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeChat;
