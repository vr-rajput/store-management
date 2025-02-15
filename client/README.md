# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Project Coding Standards & Guidelines

## 📌 Overview

This document defines coding rules and best practices for developing React applications to ensure a **consistent, scalable, and maintainable** codebase.

## 📁 Project Structure

Maintain a clean and modular folder structure:


---

## ✅ General Coding Guidelines

### 1️⃣ **Component-Based Structure**
- Break the UI into small, reusable components.
- Follow **Single Responsibility Principle (SRP)** – one component should do one thing well.

✅ **Good Example**
```jsx
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
export default Button;

🚫 **Bad Example**
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

2️⃣ File Naming Conventions
    Components: PascalCase (e.g., Navbar.js, ProductCard.js).
    Hooks: camelCase (e.g., useAuth.js).
    Context files: PascalCase (e.g., AuthContext.js).
    Styles: kebab-case.module.css (e.g., navbar.module.css).

3️⃣ Use Functional Components & Hooks
    Always use functional components instead of class components.
    Use React Hooks for state management and side effects.

✅ Good Example
    const [count, setCount] = useState(0);
    useEffect(() => {
    console.log("Component mounted");
    }, []);

🚫 Bad Example
    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.state = { count: 0 };
        }
        componentDidMount() {
            console.log("Component mounted");
        }
    }

4️⃣ State Management
    Use React Context for global state management.
    Use useReducer for complex state logic.
    Use Recoil, Zustand, or Redux if necessary.

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);


 CSS & Styling
    Prefer CSS Modules or Styled Components over global styles.
    Keep component styles in their respective .module.css file.
    Maintain a consistent design system.
    
✅ Example (CSS Module)
    /* button.module.css */
    .button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    }

🚫 Bad Example (Global CSS Overuse)
    button {
       background-color: red;
    }

6️⃣ API Calls & Error Handling
    Keep API calls in a separate services/ folder.
    Always handle errors properly.

7️⃣ Performance Optimization
    Use useMemo and useCallback for expensive calculations.
    Lazy load components using React.lazy & Suspense.
    Debounce API requests for search functionality.
✅ Lazy Loading Example

9️⃣ Code Reviews & PR Guidelines
    Follow branch naming conventions:
        feature/add-authentication
        bugfix/fix-navbar
    Use meaningful commit messages:


🔥 Best Practices Summary
✅ DO:

Use functional components & hooks.
Keep components small and reusable.
Store API calls separately.
Use .env files for secrets.
Use meaningful prop names.
Maintain a consistent coding style.
🚫 DON’T:

Overuse useEffect for state updates.
Store business logic inside components.
Use console.log in production.
Ignore error handling in API calls.
