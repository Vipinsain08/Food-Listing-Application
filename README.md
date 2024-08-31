﻿# Good-Food-Zone
Good Food Zone is a simple food ordering application developed as a learning project. It includes essential features such as adding food items, searching for food, and categorizing them. The backend is built using Spring Boot, providing RESTful APIs to manage food data, while the frontend is powered by React for a smooth user interface. This project serves as a demonstration of full-stack development skills, focusing on API integration, database interactions, and responsive UI design.

# Project Structure
- Frontend: Located in the Food Ordering Frontend directory, built using React.
- Backend: Located in the food_ordering_backend directory, built using Java with Spring Boot.

# Technologies Used 
## Frontend:
- React
- JavaScript (ES6+)
- HTML/CSS
## Backend:
- Java
- Spring Boot
- Hibernate
- MySQL


# Setup and Installation

## Backend

1. Navigate to the backend directory
   ```bash
   cd food_ordering_backend/food_ordering_backend
2. Open the directory in any Java IDE.
3. Load the pom.xml file to install dependencies.
4. Configure the application.properties file with your database settings.
   ``` bash
   spring.datasource.url=jdbc:mysql://localhost:3306/yourDatabaseName
    spring.datasource.username=yourUsername
    spring.datasource.password=yourPassword
5. Run the main application file (FoodOrderingBackendApplication.java) to start the backend.

## Frontend 

1. Navigate to the frontend directory:
   ``` bash
   cd Food\ Ordering\ Frontend
2. Install dependencies:
   ``` bash
   npm install
3. Start the development server:
   ``` bash
   npm run dev
# Usage
- Access the frontend at http://localhost:5173.
- The backend API runs at http://localhost:8080.
