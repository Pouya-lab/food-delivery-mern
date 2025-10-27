🍔 Food Delivery Web Application
A full-stack food delivery platform built with React.js, Node.js (Express), and MongoDB, featuring a user panel, admin dashboard, and secure Stripe payment integration. The system is fully responsive, includes authentication, order management, and real-time order status updates.

🚀 Features
👤 User Panel
- User login & registration with JWT authentication
- Add or remove items from the cart
- Stripe payment gateway integration for secure checkout
- View order history and live order status
- Fully responsive UI for mobile and desktop
  
🧑‍💼 Admin Dashboard
- Add, edit, or remove food items from the menu
- View all customer orders
- Update order status (Processing → On the way → Delivered)
- Manage payments and verify successful transactions via Stripe
  
⚙️ Backend Features
- RESTful API built with Express.js
- MongoDB with Mongoose for data modeling
- Secure JWT-based authentication
- Multer for image uploads
- CORS configured for multi-frontend setup (user app & admin app)
- Stripe webhooks for payment verification
  
🧠 Tech Stack
Layer	Technologies
Frontend	React.js, React Router, Axios, Context API
Backend	Node.js, Express.js, Mongoose, Multer, JWT, Stripe API
Database	MongoDB (Atlas)
Other	dotenv, CORS, bcrypt, validator

💳 Stripe Payment Flow
1. User places an order and proceeds to checkout.
2. Backend creates a Stripe Checkout Session and returns a session_url.
3. On successful payment, Stripe redirects to the verification page (/verify).
4. Backend verifies the payment and updates the order’s payment status to true.

🧑‍💻 Author
Pouya Behrooj
Master’s Student in Artificial Intelligence @ JKU Linz

