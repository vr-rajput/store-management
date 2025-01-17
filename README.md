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



# server 
>> config >> index file create json file with environment varaible
