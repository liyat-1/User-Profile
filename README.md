# README - User Profile Website

## Overview
This is a user profile website built using the Angular framework for the frontend and PHP with MySQL for the backend. The project is styled using Material UI for a modern and responsive design.

## Project Structure
The project is divided into two main parts:
- **Frontend**: Built with Angular, located in the `frontend` directory.
- **Backend**: Built with PHP, MySQL, located in the `backend` directory.
You can visit the respective directories in the GitHub repository to view the full structure and code.

## Getting Started
### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install the dependencies using `npm install`.
3. Start the Angular development server using `ng serve`.



   <img width="409" alt="image for web" src="https://github.com/liyat-1/User-Profile-using-Angular/assets/120402310/aa958a1f-f0e0-4261-adf8-562de4d8fb79">


### Backend Setup
1. Ensure you have XAMPP or a similar server environment installed.
2. Navigate to the `backend` directory and move it to the XAMPP's `htdocs` directory.
3. Start the Apache and MySQL services from the XAMPP control panel.

### Database Setup
To set up the database:
1. Open phpMyAdmin from the XAMPP control panel.
2. Create a new database.
3. Import the database structure from the `db.sql` file located in the `backend` directory.

## API and Endpoints
The backend includes a RESTful API to handle user data. The API endpoints are as follows:
- `/api/users` - GET, POST, PUT, DELETE user data
- `/api/profiles` - GET, POST, PUT, DELETE profile data

## Styling
The project uses Material UI for styling. Ensure you have the necessary Angular Material components installed and imported in your Angular project.
To install Material UI, run:

## Running the Application
Once you have both the frontend and backend set up, you can run the application by starting both the Angular development server and the Apache server from XAMPP. Open your browser and navigate to `http://localhost:4200` to view the application.
