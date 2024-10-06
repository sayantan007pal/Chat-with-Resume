// src/components/JobDescriptionForm.js
import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { CopilotKit } from "copilotkit";

const JobDescriptionForm = ({ parsedResume }) => {
  const [jobDescription, setJobDescription] = useState("");
  const [customResume, setCustomResume] = useState("");

  const handleTailorResume = async () => {
    const tailoredResume = await CopilotKit.customizeResume(parsedResume, jobDescription);
    setCustomResume(tailoredResume);
  };

  return (
    <Box my={4}>
      <TextField
        label="Paste Job Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <Button onClick={handleTailorResume} variant="contained" color="secondary" style={{ marginTop: "20px" }}>
        Tailor Resume
      </Button>
      {customResume && (
        <Box mt={4}>
          <Typography variant="h6">Tailored Resume:</Typography>
          <Typography variant="body1" component="pre">{customResume}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default JobDescriptionForm;
