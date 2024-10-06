// src/components/ResumeUpload.js
import React, { useState } from "react";
import { Button, Typography, Box } from "@material-ui/core";
import FileReader from "react-file-reader";
import axios from "axios";

const ResumeUpload = ({ onUpload }) => {
  const [resumeData, setResumeData] = useState(null);

  const handleFileUpload = (files) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const resumeText = event.target.result;
      setResumeData(resumeText);
      axios.post('/api/parse-resume', { resume: resumeText })
        .then(response => onUpload(response.data))  // Send parsed resume data to parent component
        .catch(error => console.error("Error parsing resume:", error));
    };
    reader.readAsText(files[0]);
  };

  return (
    <Box my={4}>
      <Typography variant="h5" align="center" gutterBottom>Upload Your Resume</Typography>
      <FileReader handleFiles={handleFileUpload}>
        <Button variant="contained" color="primary">Upload Resume</Button>
      </FileReader>
      {resumeData && (
        <Box mt={2}>
          <Typography variant="subtitle1">Resume Preview:</Typography>
          <Typography variant="body2" component="pre">{resumeData}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ResumeUpload;
