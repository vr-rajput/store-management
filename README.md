# store-management

src/
├── assets/                # Static assets like images, icons, and fonts
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/            # Reusable UI components
│   ├── Auth/
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── AuthWrapper.jsx
│   │   └── index.js
│   ├── Medicine/
│   │   ├── MedicineList.jsx
│   │   ├── MedicineForm.jsx
│   │   └── index.js
│   ├── Orders/
│   │   ├── OrderHistoryList.jsx
│   │   ├── OrderDetails.jsx
│   │   └── index.js
│   └── Shared/
│       ├── Button.jsx
│       ├── InputField.jsx
│       ├── Modal.jsx
│       └── index.js
│
├── context/               # Context API for global state management
│   ├── AuthContext.jsx
│   ├── MedicineContext.jsx
│   └── OrderContext.jsx
│
├── hooks/                 # Custom hooks
│   ├── useAuth.js
│   ├── useMedicine.js
│   └── useOrder.js
│
├── layouts/               # Layout components
│   ├── AdminLayout.jsx
│   ├── AuthLayout.jsx
│   └── index.js
│
├── pages/                 # Page-level components
│   ├── Auth/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── ForgotPasswordPage.jsx
│   ├── Dashboard/
│   │   ├── DashboardPage.jsx
│   ├── Medicine/
│   │   ├── MedicineListPage.jsx
│   │   ├── CreateMedicinePage.jsx
│   │   └── UpdateMedicinePage.jsx
│   ├── Orders/
│   │   ├── OrderHistoryPage.jsx
│   │   └── OrderDetailsPage.jsx
│   └── index.js
│
├── services/              # API services and utilities
│   ├── authService.js
│   ├── medicineService.js
│   ├── orderService.js
│   └── httpClient.js
│
├── styles/                # Global and modular styles
│   ├── globals.scss
│   ├── auth.scss
│   ├── medicine.scss
│   ├── orders.scss
│   └── shared.scss
│
├── utils/                 # Utility functions
│   ├── validators.js
│   ├── formatters.js
│   └── constants.js
│
├── App.jsx                # Main App component
├── index.jsx              # Entry point
└── routes/                # App routing
    ├── PrivateRoute.jsx
    ├── PublicRoute.jsx
    └── AppRoutes.jsx

<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->

/store-management-app 
├── /backend 
│       ├── /models 
│       ├── /controllers 
│       ├── /routes 
│       ├── /middlewares 
│       └── server.js 
├── /frontend 
│       ├── /src 
│       │   ├── /components 
│       │   │   ├── /Product 
│       │   │   ├── /Order 
│       │   │   ├── /User 
│       │   │   └── /Dashboard 
│       │   ├── /hooks 
│       │   ├── /context
│       │   ├── /layouts
│       │   ├── /pages
│       │   ├── /utils
│       │   ├── /styles 
│       │   ├── /services 
│       │   └── App.js 
├── .env 
├── package.json 
└── README.md

# Store Management Web Application

## Overview

This is a store management web application built using the **MERN Stack (MYsql, Express, React, Node.js)**. It provides an intuitive interface for managing a store, including user authentication, managing products, tracking orders, and viewing order history. The application is designed to be scalable, maintainable, and user-friendly for both administrators and customers.

## Features

- **User Authentication**: Allows users to register and log in to the application securely.
- **Product Management**: Admin users can add, edit, delete, and view products.
- **Order Management**: Customers can view their order history, and admin users can manage orders.
- **Dashboard**: Provides a comprehensive overview of store statistics, products, and order data.

## Application Flow

### 1. **User Authentication**
   - **Registration**: Users can sign up by providing basic details such as name, email, and password.
   - **Login**: Registered users can log in with their credentials.
   - **Session Management**: JWT-based authentication ensures that users remain logged in across sessions.
   
### 2. **Dashboard**
   - **Admin Dashboard**: Provides an overview of the store's key metrics such as total orders, active products, and other relevant data. 

### 3. **Product Management**
   - **Add Products**: Admin users can add new products by providing product details such as name, description, price, and image.
   - **Edit Products**: Admin users can edit the details of existing products.
   - **Delete Products**: Admin users can remove products from the inventory.
   - **View Products**: Customers can view product details and browse the available inventory.

### 4. **Order Management**
   - **Create Orders**: Customers can add products to their cart and place orders.
   - **Track Orders**: Customers can track the status of their orders.
   - **View Order History**: Customers can view past orders and their status.
   - **Manage Orders**: Admin users can update the status of orders and manage the order lifecycle.


### Backend

- **Models**: Contains Mongoose schemas for `User`, `Product`, and `Order`.
- **Controllers**: Handles business logic for each route (e.g., creating an order, managing products).
- **Routes**: Defines the API endpoints for the application.
- **Middlewares**: Handles authentication and error management.

### Frontend

- **Components**: Contains React components for displaying products, handling user registration and login, managing orders, and displaying the dashboard.
- **Hooks**: Contains custom React hooks for managing state and making API calls.
- **Context**: Stores global state and provides it to various parts of the application.
- **Services**: Contains functions for making API requests to the backend (e.g., getProducts, createOrder).
- **Page**: Contain the Page-level components for sepearte,
- **Layout**: Contaian the layout or static like header and sidebar for all component

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/store-management-app.git
cd store-management-app


```Install Backend Dependencies
    cd backend
    npm install

```set Up Environment Variables
    Create a .env file in the backend directory with the following variables:
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000

```Run Backend Server
    npm start

```Install Frontend Dependencies
    cd frontend
    npm install

```Run Frontend Server
    npm start

