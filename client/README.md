# Timesheet Application

## Overview
The Timesheet Application is a web-based tool that allows users to manage their timesheets. Users can enter timesheet data, including the date, description, and rate, and view a list of their timesheets with total costs calculated.

## Features
- Enter date, description, and rate for each timesheet entry
- View a list of all timesheets with total costs calculated
- MongoDB integration for data storage

## Technologies Used
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Other Libraries: Axios (for HTTP requests)

## Getting Started
To run the Timesheet Application locally, follow these steps:

### 1. Clone the repository to your local machine:
git clone <repository_url>

### 2. Navigate to the project directory:
cd timesheet-application

### 3. Install dependencies for both client and server:
cd client
npm install
cd ../server
npm install

### 4. Start the server:
npm start

### 5. Start the client:
cd ../client
npm start

### 6. Open your web browser and navigate to `http://localhost:3000` to access the Timesheet Application.

## MongoDB Setup
Ensure you have MongoDB installed and running on your local machine. You can download MongoDB from the official website: https://www.mongodb.com/try/download/community

## Important Note
Before starting the application, make sure to configure the MongoDB connection URI in the server's `.env` file.

