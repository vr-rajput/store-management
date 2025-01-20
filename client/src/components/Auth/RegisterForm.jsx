import { useForm } from "../../hooks/useAuth";
import { registerUser } from "../../services/authService";
import "../../styles/auth.css";
import { keyWord } from "../../utils/keyword";
import Style from "./Register.module.css";

const RegisterForm = () => {
  const { values, handleChange,handleSubmit, passwordMismatch } = useForm( {
    storeName: "",
    userName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirm_password: ""
  },
  registerUser,
  keyWord?.actionType?.register
);
  return (
    <div className={`${Style.Register} vh-100 vw-100`}>
      <form
        onSubmit={handleSubmit}
        className="bg-light p-4 rounded shadow-sm col-md-6"
      >
        <h2 className="text-center mb-4">Register</h2>
        <a href="/login">Already have an account? Login here</a>
        <div className="mb-3">
          <input
            type="text" 
            name="storeName"
            className="form-control"
            value={ values?.store_name }
            onChange={handleChange}
            required
            placeholder="store name"
          />
        </div>
        <div className="mb-3"> 
          <input
            type="text" 
            name="userName"
            className="form-control"
            value={ values?.user_name }
            onChange={handleChange}
            required
            placeholder="user_name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email" 
            name="email"
            className="form-control"
            value={ values?.email }
            onChange={handleChange}
            required
            placeholder="E-mail"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="phone"
            className="form-control"
            value={ values?.phone }
            onChange={handleChange}
            required
            placeholder="Phone"
          />
        </div>
        <div className="mb-3">
          <input
            type="text" 
            name="address"
            className="form-control"
            value={ values?.address }
            onChange={handleChange}
            required
            placeholder="Address"
          />
        </div>
        <div className="mb-3">
          <input
            type="password" 
            name="password"
            className="form-control"
            value={ values?.password }
            onChange={handleChange}
            required
            placeholder="password"
          />
        </div>
        <div className="mb-3">
          <input
            type="password" 
            name="confirm_password"
            className="form-control" 
            value={ values?.c_password }
            onChange={handleChange}
            required
            placeholder="confirm-password"
          /> 
          { passwordMismatch && (
          <span style={{ color: "red" }}>Confirm password does not match</span>
        )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign-up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
