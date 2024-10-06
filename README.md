# Chat-with-Resume

## Overview

Chat with Resume is an AI-powered web application that allows users to interact with their resumes through various CoAgents. The app leverages the capabilities of CopilotKit and LangGraph to provide a seamless experience in resume evaluation, job tailoring, and interview preparation.

Tweet link

    https://x.com/sayantanpal100/status/1842891246383010206?t=6r6ceic4SreV1AOpdhrDyw&s=35

## Features

- **Upload and Parse Resumes**: Users can upload their resumes, which will be parsed and made available for chat.
- **AI Chat with CoAgents**: Interact with different AI agents for:
  - **Resume Evaluation**: Get feedback on your resume.
  - **Job Tailoring**: Tailor your resume according to specific job descriptions.
  - **Interview Preparation**: Simulate interview questions based on your resume.
- **Clean and Modern UI**: A user-friendly interface built with Material-UI for an engaging experience.
- **Responsive Design**: Works well on various devices and screen sizes.

## Architecture

The app is composed of three main components:

1. **Frontend**: A React.js application that allows users to upload resumes and interact with AI agents.
2. **Backend**: A Node.js and Express server that handles resume uploads, parsing, and communication with AI models.
3. **CoAgents**: Different AI agents that provide tailored interactions based on the user's resume.

## Technologies Used

- **Frontend**: React, Material-UI, CopilotKit
- **Backend**: Node.js, Express, Multer, LangGraph
- **Deployment**: GitHub for version control

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- Git for version control

### Running the Application

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sayantan007pal/Chat-with-Resume.git
    cd Chat-with-Resume
    ```

2. **Navigate to the server folder**:
    ```bash
    cd server
    ```

3. **Install the backend dependencies**:
    ```bash
    npm install express multer path langgraph
    ```

4. **Navigate back to the root folder for the frontend**:
    ```bash
    cd ..
    ```

5. **Install the frontend dependencies**:
    ```bash
    npm install
    ```

### Running the Application

To run the application, you'll need to start both the backend and frontend servers.

#### Step 1: Start the Backend Server

1. Navigate to the `server` directory:
   ```bash
   cd server
2. Start the backend server:

       node server.js
   
Step 2: Start the Frontend
1. Open a new terminal, navigate back to the root directory:

       cd ..
2. Start the frontend server:

       npm start
Step 3: Access the Application
     Open your web browser and navigate to:
     
     http://localhost:3000


You can now upload your resume and interact with the AI agents!
## Directory Structure
  frontend/: Contains the React.js frontend code.
  server/: Contains the Node.js and Express server code that handles resume uploads and AI interactions.
## Troubleshooting
  Cannot find module 'express': Ensure you have installed the backend dependencies in the server folder.
  Error: src refspec main does not match any: Make sure you are on the correct branch or that you have committed changes before pushing.
  Another git process seems to be running: Ensure all Git processes are terminated and try again.
## Future Improvements
  Enhanced AI Features: Integrate more advanced AI models for better resume evaluation and tailoring.
  User Authentication: Implement user authentication for a personalized experience.
  Expanded Job Market Analysis: Integrate job market data to provide tailored suggestions based on trends.
## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Create a new Pull Request.
## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments
1. CopilotKit for providing an easy way to integrate AI copilots.
2. LangGraph for enabling interaction with CoAgents.
