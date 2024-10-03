# Authentification_Partie_FrontEnd

This project is a frontend application built using React, Tailwind CSS, and `react-router-dom`. It includes authentication features such as login, registration, forgot password, and password reset.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Features](#features)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [License](#license)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Router DOM**: For routing and navigation in the SPA.
- **Poppins**: Font family used for the application.
- **React Hooks**: For state management in functional components.

## Project Structure

- **AuthLayout.jsx**: A layout component that wraps around authentication views such as login and registration.
- **Login.jsx**: Component for user login.
- **Register.jsx**: Component for user registration.
- **ForgotPassword.jsx**: Component for requesting a password reset.
- **ResetPassword.jsx**: Component for setting a new password.
  
## Features

- **Login**: Users can log into their accounts with email and password.
- **Registration**: New users can register for an account.
- **Forgot Password**: Users can request a password reset link to their email.
- **Password Reset**: Users can set a new password using the reset token sent to their email.
- **Responsive Design**: The UI is designed to be fully responsive across different devices.

## Setup

### Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js**: Version 14.x or later
- **npm** or **yarn**: Package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Authentification_Partie_FrontEnd.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Authentification_Partie_FrontEnd
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Add the **Poppins** font by including it in your `tailwind.config.js` file or linking it using the CDN in your `index.html` if applicable:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Building for Production

To create a production build, run:
```bash
npm run build
```

