# Product Management App

A full-stack CRUD web application designed to manage and store product inventory. This project was built as a foundational milestone in learning modern full-stack JavaScript development, covering both client-side rendering and server-side API integration.

---

## Features

- **Read Products**: Fetch and display real-time product listings dynamically.
- **Create Product**: Add new products with title, price, and image URL validations.
- **Update Product**: Prefill existing product data into forms for seamless editing.
- **Delete Product**: Remove products from the database with confirmation handling.
- **Responsive Interface**: Clean and accessible layout across desktop and mobile views.

---

## Technologies Used

### Frontend
- **React.js**: Component-based UI library.
- **Vite**: Next-generation frontend build tooling and dev server.
- **JavaScript (ES6+)**: Core client logic, async operations, and state handling.
- **HTML5 & CSS3**: Semantic markup and responsive styling.

### Backend & Database
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Backend framework for building RESTful APIs.
- **MongoDB**: NoSQL document database.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

---

## Development Process

1. **Database Modeling**: Defined the product schema (name, price, and image) using Mongoose and configured a MongoDB cluster connection via secure environment variables (`.env`).
2. **REST API Construction**: Implemented backend routing and controller logic using Express.js on port `5000` to handle CRUD operations with proper HTTP status codes.
3. **Frontend Architecture**: Initialized the client environment using Vite and React, setting up reusable components for product cards, navigation, and modal/forms.
4. **API Integration**: Connected frontend state to backend endpoints using asynchronous `fetch` calls, ensuring dynamic UI updates after create, edit, or delete actions.

---

## What I Learned

### JavaScript & Backend (Node.js / Express.js)
- **Modern JavaScript (ES6+)**: Mastered template literals, array manipulation methods, destructuring, and conditional logic.
- **Asynchronous Programming**: Handled asynchronous flows, promises, and error catching using `async/await` and `try...catch` blocks.
- **RESTful Architecture**: Structured endpoint routing, request body parsing (`express.json()`), and proper HTTP response status management.
- **Database Integration**: Managed connections to MongoDB, handled data validation through Mongoose schemas, and executed queries (`find`, `findByIdAndUpdate`, `findByIdAndDelete`).
- **Environment Management**: Protected sensitive database URIs and port configurations using `dotenv`.

### React.js & Frontend Development
- **State Management (`useState`)**: Managed dynamic UI states including form inputs, loading flags, and real-time product arrays.
- **Lifecycle & Side Effects (`useEffect`)**: Orchestrated data-fetching on initial component mount and synchronized state changes.
- **Controlled Forms**: Implemented controlled input patterns to validate and capture user input before submitting payloads.
- **Component Architecture**: Broke down monolithic interfaces into clean, modular, and reusable components.
- **Client-Side Data Fetching**: Integrated native Fetch APIs to communicate seamlessly with backend endpoints and handle edge cases gracefully.

---

## How can it be improved?
- More Features
- Add Login authentication
- Create User Roles

---

## Images & Documentation

### Home Page

<img width="1863" height="881" alt="image" src="https://github.com/user-attachments/assets/a4516b64-348b-495e-83a0-50c5c737b290" />

<img width="1862" height="880" alt="image" src="https://github.com/user-attachments/assets/49c86906-750e-4d40-ad81-5689f79ac286" />

### Update and Create Product Pages

<img width="1863" height="881" alt="image" src="https://github.com/user-attachments/assets/00b5d4b2-3171-41f0-a33e-d42893e69a81" />

