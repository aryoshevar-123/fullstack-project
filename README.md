# Fullstack Product Management Application
This is my very first Fullstack Web Application project. It was built as a learning milestone to master the MERN Stack (MongoDB, Express, React, Node.js).

While this project originated from a tutorial, I modernized the entire codebase. The original tutorial used legacy versions of libraries, but I implemented this using React 19, Vite 6, and Chakra UI v3, which required significant troubleshooting and custom code adjustments due to major "breaking changes" in the newer versions.

## Key Features
- Full CRUD Functionality: Create, Read, Update, and Delete products seamlessly.
- Safety Net Delete: Implemented a two-step verification process for deleting products (a confirmation pop-up) to prevent accidental data loss.
- Dynamic Theme Toggle: Smooth transition between Dark and Light modes using Chakra UI’s latest color mode system.
- Real-time Database Integration: Persistent storage using MongoDB Atlas with Mongoose ODM.
- Responsive Design: A fully mobile-responsive interface that looks great on all screen sizes.
## Tech Stack
### Frontend
- React 19: Utilizing the latest rendering features and hooks.
- Vite 6: For an ultra-fast development environment.
- Chakra UI v3: Modern component library for a clean and accessible UI.
- Zustand: Lightweight global state management to handle products and UI feedback.
- React Router DOM v7: Managing client-side navigation.

### Backend
- Node.js & Express 5: Handling the RESTful API and server-side logic.
- MongoDB & Mongoose: NoSQL database for flexible data management.
- Cross-env: Ensures environment variables work correctly across Windows and Linux.
- Dotenv: Securely managing sensitive credentials.

## Installation & Setup
1. Clone the Repository
```
git clone https://github.com/aryoshevar-123/fullstack-project.git
cd fullstack-project
```
2. Build dependencies
```
npm run build
```
3. Environment Variables
Create a .env file in the root directory and add your credentials:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```
4. Run the Application
```
npm run start
```
## Modernization Log (Challenges & Fixes)
Since I used the latest versions of every library, I had to solve several technical hurdles that weren't in the original tutorial:
- Express 5 Routing: Updated the catch-all route to /.*/ to comply with the new path-to-regexp v7+ standards used in Express 5.
- Chakra UI v3 Migration: Re-wrote the theme logic to use useColorModeValue and the new ColorModeProvider system.
- DNS Connection Fix: Added a manual DNS server configuration (8.8.8.8) in the backend to bypass ETIMEOUT errors caused by certain ISP/Mobile Tethering restrictions when connecting to MongoDB Atlas.
- React 19 Compatibility: Adjusted component structures and imports to align with React 19's stricter standards.

## Author
**Aryo Sheva**
