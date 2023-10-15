# Blog Site Application

## Overview

The Blog Site Application is a Node.js-based web application for creating and managing a blog site. It allows users to write and publish blog posts and provides an admin interface for managing blog content. This README provides an overview of the application's features, setup instructions, and usage guidelines.

## Features

- User-friendly web interface for reading and writing blog posts.
- Admin dashboard for managing blog content, including adding, editing, and deleting posts.
- Cookie-based session management for user authentication.
- MongoDB integration for storing blog data.
- EJS templating engine for rendering dynamic web pages.
- Secure management of environment variables using dotenv.

## Setup

To set up and run the Blog Site Application, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**
```bash
npm install
```
3. **Configure Environment Variables:**
Create a .env file in the project root directory and add the following environment variables:
```env
MONGODB_URI=<your-mongodb-uri>
```
Replace <your-mongodb-uri> with the MongoDB connection URI for your database.

4. **Start the Application:**
```bash
npm start
```
The application will run on port 3000 by default. You can change the port by modifying the PORT variable in the code.

5. **Access the Application:**
Open a web browser and navigate to http://localhost:3000 (or the chosen port).

## Usage

1. **User Interface:**
- Visit the homepage to view a list of blog posts.
- Click on a blog post to read the full content.
- Use the search button to find blog posts easily.

2. **Admin Interface:**
- Access the admin dashboard by navigating to http://localhost:3000/admin (or the chosen port).
- Sign in with your admin credentials.
- Use the admin dashboard to add, edit, or delete blog posts.

3. **Writing Blog Posts:**
- As an admin, use the dashboard to create new blog posts.
- Provide a title and content for each post.
- Save the post to make it visible on the homepage.

4. **Editing and Deleting Posts:**
- In the admin dashboard, you can edit or delete existing blog posts.
- Use the provided options to make changes to blog content.

