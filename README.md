1. Frontend (React + Vite)
- Setup: We started with the React + Vite template for fast development and HMR (Hot Module Replacement).
- UI Components: Built pages for Products, Services, Cart, Orders, and Contact.
- Routing: Used React Router for navigation between pages (Home, Products, Services, Cart, Contact, Dashboard).
- API Integration: Connected frontend to backend using import.meta.env.VITE_API_URL for environment‑based API calls.
- Deployment: Deployed frontend on Vercel, ensuring environment variables were set correctly for production.
- Testing: Verified flows like signup/login, adding products to cart, making payments, and submitting contact forms directly from browser and mobile.

2. Backend (Node.js + Express)
- Setup: Created an Express server with routes for authentication, products, services, cart, orders, and contact.
- Database: Integrated MongoDB with Mongoose for schema definitions and data persistence.
- Payments: Implemented Razorpay order creation and signature verification to securely handle transactions.
- Contact Requests: Built an endpoint to capture and store user messages in MongoDB.
- CORS: Configured to allow both local development and deployed frontend domains.
- Deployment: Deployed backend on Render, connected to MongoDB Atlas for cloud database.

3. End‑to‑End Flow
- User Journey: Signup/Login → Browse Products/Services → Add to Cart → Checkout → Razorpay Payment → Order stored in MongoDB → Contact form submission.
- Validation: Tested flows using Postman, browser, and mobile devices. Verified JSON responses for orders and contact requests.
- Live Demo: Frontend available at https://cand-c-saa-s-frontend.vercel.app/

4. Next Steps
- Build an Admin Dashboard to monitor Orders and Contact requests together.
- Add Email notifications for new orders and contact submissions.
- Improve UI/UX for payment success and contact confirmation pages
