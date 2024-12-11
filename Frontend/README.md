# Setup Guide: Vite Frontend with .env and Node.js Backend

This guide outlines the steps to set up a Vite frontend server with `.env` configuration and a Node.js backend server.

---

## Prerequisites
Ensure the following tools are installed on your system:
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** (package manager)
- **Git** (optional, for version control)

---

## Directory Structure
Set up your project directories as follows:
```
project-root/
  Frontend/   # Vite frontend
  Backend/    # Node.js backend
```

---

## Setting Up the Frontend

### 1. Initialize Vite Frontend
1. Navigate to the `Frontend` folder:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### 2. Configure `.env`
1. Create a `.env` file in the `Frontend` directory:
   ```bash
   touch .env
   ```
2. Add environment variables (e.g., backend API URL):
   ```env
   VITE_GOOGLE_API = AIzaSyAK4SZ9zAMzGybCqepQ2H1ogM6L6tDH1JA
   VITE_ACCESS_TOKEN = pk.eyJ1Ijoic2FhZDA3NiIsImEiOiJjbTJnY3N5dnowMTJ2MmpxejFxa2hhYXZ4In0.xzXAWCKAwht4AgfneHLo-A
   VITE_BACKEND_URL = http://localhost:5000
   ```

3. Access these variables in your code using:
   ```javascript
   const apiUrl = import.meta.env.VITE_BACKEND_URL;
   console.log("Backend API URL:", apiUrl);
   ```

### 3. Start the Frontend Server
Run the Vite development server:
```bash
npm run dev
```
By default, it will run at `http://localhost:5173`.

---

## Setting Up the Backend

### 1. Initialize Node.js Backend
1. Navigate to the `Backend` folder:
   ```bash
   cd Backend
   ```
2. Install required packages:
   ```bash
   npm install express dotenv
   ```

### 2. Configure `.env`
1. Create a `.env` file in the `backend` directory:
   ```bash
   touch .env
   ```
2. Add environment variables :
   ```env
   PORT=5000
   MONGO_URI= mongodb+srv://location:saumya123@cluster0.qbxpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=mysecret

   ```

### 3. Start the Backend Server
Run the Node.js server:
```bash
npm start
```
By default, it will run at `http://localhost:5000`.

---

## Connecting Frontend and Backend
Ensure both servers are running:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`





