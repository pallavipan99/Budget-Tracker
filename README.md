# Budget Tracker

A full-stack budget tracking application built with **React (frontend)**
and **Node.js/Express with SQLite (backend)**.\
The app allows users to add, view, and analyze expenses with interactive
charts, providing a simple yet powerful way to track personal budgets.

------------------------------------------------------------------------

## Features

-   Add, edit, and delete expenses with description, category, and
    amount.
-   View all expenses in a tabular format with real-time updates.
-   Visualize spending trends using **Chart.js** (via react-chartjs-2).
-   Backend API with **Express + SQLite** for persistent storage.
-   Modular frontend built with React components and Tailwind CSS.
-   Cross-origin support (CORS) to connect React and Express servers.

------------------------------------------------------------------------

## Project Structure

    Budget-Tracker-main/
      Backend/                # Node.js + Express API server
        index.js              # Entry point for backend server
        routes.js             # API endpoints
        db.js                 # SQLite database setup
        package.json          # Backend dependencies
      
      Frontend/               # React application (Create React App)
        src/
          App.js              # Main application component
          ExpenseForm.js      # Form to add new expenses
          ExpenseList.js      # Table to list all expenses
          Chart.js            # Chart visualization component
          index.css           # Tailwind CSS configuration
        package.json          # Frontend dependencies

------------------------------------------------------------------------

## Installation & Setup

### 1. Clone the repository

``` bash
git clone https://github.com/your-username/Budget-Tracker.git
cd Budget-Tracker-main
```

### 2. Backend Setup

``` bash
cd Backend
npm install
npm start
```

This will start the Express backend (default: <http://localhost:3001>).

### 3. Frontend Setup

``` bash
cd ../Frontend
npm install
npm start
```

This will start the React development server (default:
<http://localhost:3000>).

Ensure the frontend is pointing to the correct backend API URL
(configured in `App.js` or API service file).

------------------------------------------------------------------------

## API Endpoints

### Base URL: `http://localhost:3001/api/expenses`

  ----------------------------------------------------------------------------------------------------------------------------
  Method   Endpoint             Description               Payload Example
  -------- -------------------- ------------------------- --------------------------------------------------------------------
  GET      `/`                  Fetch all expenses        --

  POST     `/`                  Add a new expense         `{ "description": "Groceries", "amount": 50, "category": "Food" }`

  PUT      `/:id`               Update an expense         `{ "description": "Fuel", "amount": 40, "category": "Transport" }`

  DELETE   `/:id`               Delete an expense by ID   --
  ----------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Technologies Used

-   **Frontend**: React, Tailwind CSS, Axios, Chart.js
-   **Backend**: Node.js, Express, SQLite, CORS, Body-parser
-   **Database**: SQLite (lightweight file-based storage)

------------------------------------------------------------------------

## Future Improvements

-   Add user authentication & login system.
-   Categorize expenses with filtering and search features.
-   Export reports to CSV/PDF.
-   Deploy with Docker or cloud services (Heroku, Vercel, etc.).
-   Add unit and integration tests.
