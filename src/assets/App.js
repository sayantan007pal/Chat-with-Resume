// src/App.js
import React, { useState } from "react";
import { Container, CssBaseline, Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import ResumeUpload from "./components/ResumeUpload";
import ResumeChat from "./components/ResumeChat";
import JobDescriptionForm from "./components/JobDescriptionForm";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './styles/theme';
import { Menu as MenuIcon } from '@material-ui/icons';

function App() {
  const [parsedResume, setParsedResume] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            AI-Powered Resume Assistant
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Chat with AI Agents for Your Resume
        </Typography>

        <ResumeUpload onUpload={setParsedResume} />

        {parsedResume && (
          <>
            <ResumeChat />
            <JobDescriptionForm parsedResume={parsedResume} />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
