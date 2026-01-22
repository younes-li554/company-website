# Company Website

## Introduction to Technologies

This project uses **modern web development tools** and frameworks to build scalable web applications. Before diving into the project, it is essential to understand the core technologies we are using.  

**React** is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable components, manage dynamic data efficiently, and build interactive web pages with a virtual DOM. React's main concepts include:

- **Components**: Independent building blocks of UI. Components can be **functional** or **class-based**, though modern React prefers functional components with hooks.
- **JSX**: A syntax extension that allows mixing HTML and JavaScript in the same file.
- **State**: A way to store data that can change over time in a component.
- **Props**: Properties passed to components to make them reusable and dynamic.
- **Hooks**: Functions like `useState` and `useEffect` that manage state and side effects in functional components.
- **Routing**: Using `react-router-dom` to navigate between pages without reloading the browser.

**Node.js** allows JavaScript to run on the server side. Combined with **Express.js**, a minimal and flexible framework, it provides tools to create APIs, handle requests, and manage backend logic. Express concepts include:

- **Routing**: Define endpoints to handle GET, POST, PUT, DELETE requests.
- **Middleware**: Functions that process requests before they reach the route handler (e.g., parsing JSON, handling CORS).
- **Controllers**: Functions that process business logic and interact with databases.

**MongoDB** is a NoSQL database that stores data in flexible JSON-like documents. With **Mongoose**, we can define schemas, models, and validate data efficiently.  

Other tools used include **Git** for version control, **npm** for managing packages, and **VS Code** as the main code editor.

---

## About the Project

The **Company Website** project is a foundational web application designed to showcase a corporate website with React frontend and a backend ready for API integration. It is structured to be easily expandable and demonstrates modern web development principles.  

The project includes:

- **Frontend**: Built with React, including components, pages, and routing.
- **Backend**: Scaffolded with Express.js for handling APIs and future logic.
- **Version control**: Managed carefully with Git to prevent conflicts and ensure clean commits.

---

## What We Did Step by Step

**1. Project Structure:**  
We created the basic project folders for frontend and backend. In the frontend, we set up React pages and components. In the backend, we scaffolded folders for models, routes, and controllers. We initialized `package.json` for both parts using `npm init -y`.

**2. UI Skeleton:**  
For the frontend, we created core pages like Home, About, and Contact using React functional components. We implemented a Navbar with React Router DOM to navigate between pages seamlessly.  

**3. Styling & Layout:**  
We defined a color palette using CSS variables, used Flexbox and Grid for responsive layouts, and integrated Google Fonts for typography. Navbar was made sticky, hover effects added to buttons, and margins/paddings were standardized for consistent spacing.

**4. Forms & UI Components:**  
The Contact page includes a form with fields for name, email, and message. Form fields are linked to React state using `useState` and validated with HTML5 attributes. The frontend is now ready to capture user input and manage component state effectively.

**5. Backend Setup:**  
We set up an Express server, configured middleware (`express.json()` and `cors()`), and created routes for handling messages. Controllers were defined to process incoming requests and prepare for database integration.

**6. Database Setup:**  
A MongoDB database was planned, and Mongoose schemas were defined for storing messages. Fields include type, required status, and default values to ensure consistent data structure.

**7. Frontend-Backend Integration:**  
Using Axios, the frontend can send POST requests to the backend API to submit contact messages. Responses are handled with React state to show success or error messages and clear the form after submission.

**8. Testing:**  
We tested page navigation, form submissions with valid and invalid data, and API calls using Postman to ensure proper data handling in the backend.

**9. Project Enhancements:**  
We improved the UI with hover effects, loading spinners during submissions, alerts for success or failure, logical component organization, and added comments for readability.

---

## Summary

This project is a **starting point for building professional web applications**. It introduces key concepts of React, Express, and MongoDB, and demonstrates best practices in project structure, state management, and backend integration. The frontend is fully prepared with pages and components, while the backend is ready to handle API requests and store data.  

Developers can now expand this project by connecting databases, adding authentication, and implementing advanced features.  

We welcome edits, suggestions, and new ideas to enhance this project and make it more functional. Your contributions and feedback are always appreciated.  
