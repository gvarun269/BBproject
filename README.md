# 🚌 EasyRide - MERN Stack Bus Booking Platform

EasyRide is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to search for buses, view seat layouts, book tickets, and manage bookings.

## 🚀 Features

- Search buses based on source, destination, and date
- View real-time seat layout (Upper/Lower decks)
- User authentication (Sign Up / Sign In)
- Dynamic seat selection and booking
- Passenger details entry and ticket confirmation
- View previous bookings (My Tickets)
- Admin panel for bus management
- JWT-based secure sessions

## 🛠️ Tech Stack

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT Tokens, Bcrypt
- **Other Tools**: Nodemon, Mongoose

## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/gvarun269/easyride-bus-booking.git
cd easyride-bus-booking

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

#create .env file in the backend
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

#for running the app
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm start

You can use use the link here
https://b-bproject.vercel.app/

#for adding bus you can simple go to
https://b-bproject.vercel.app/addbus
