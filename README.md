Flashcard Learning Tool
Overview
Flashcard Learning Tool is a web application built with React for creating, viewing, and managing flashcards. The application features two main components:

FlashCardViewer: Allows users to view flashcards, flip them to reveal answers, and navigate between cards.
AdminDashboard: Provides an interface for administrators to add and delete flashcards.
The project uses Bootstrap 5.3.3 for styling and MySQL for data storage.

Features
Flashcard Viewer:

View flashcards with a flip animation.
Navigate between flashcards using previous and next buttons.
Responsive design with a modern UI.
Admin Dashboard:

Add new flashcards with questions and answers.
Delete existing flashcards.
Display flashcards in a table format with options to manage them.
Technologies Used
Frontend: React, Bootstrap 5.3.3
Backend: Node.js, Express
Database: MySQL
CSS: Custom styles for responsive design and animations
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/Ayush-Mittal10/flashcard-learning-tool.git
cd flashcard-learning-tool
Install Dependencies

bash
Copy code
npm install
Start the Development Server

bash
Copy code
npm start
Backend Setup (if applicable):

Ensure you have a MySQL database set up.
Configure your backend to connect to the MySQL database.
Usage
FlashCardViewer: Navigate to / to use the flashcard viewer. Click on the flashcards to flip them and view the answers.
AdminDashboard: Navigate to /admin to access the admin dashboard. Use the form to add new flashcards and manage existing ones.
File Structure
src/:

App.js – Main application component and routing.
FlashCardViewer.js – Component for viewing and flipping flashcards.
AdminDashboard.js – Component for managing flashcards.
FlashCardViewer.css – Custom styles for the FlashCardViewer component.
App.css – General styles for the application.
public/:

logo.jpg – Logo image for the application.
Contribution
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
