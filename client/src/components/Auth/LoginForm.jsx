import "../../styles/auth.css";
import Style from "./Register.module.css"

function LoginForm( { values, onChange, onSubmit } ) {
  return (
      <div className={ `${Style.Register} vh-100 vw-100`}   >
                <form
                    onSubmit={onSubmit}
                    className="bg-light p-4 rounded shadow-sm col-md-6"
                >
                    <h2 className="text-center mb-4">Login </h2>
                    <a href='/register'>Don't have an account? Register here</a>
                    <div className="mb-3">
                        {/* <label htmlFor="name" className="form-label">
                            Name
                        </label> */}
                        <input
                            type="text"
                            id="store_name"
                            name="store_name"
                            className="form-control"
                            value={values}
                            onChange={onChange}
                            required
                            placeholder='store name'
                        />
                    </div> 
                    <div className="mb-3">
                        {/* <label htmlFor="email" className="form-label">
                            Email
                        </label> */}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={values}
                            onChange={onChange}
                            required
                            placeholder="E-mail"
                        />
                    </div>  
                    <div className="mb-3">
                        {/* <label htmlFor="password" className="form-label">
                            Password
                        </label> */}
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={values}
                            onChange={onChange}
                            required
                            placeholder='password'
                        />
                    </div> 
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                    <a href='/'>Forgot password</a>
                </form>
            </div>
  )
}

export default LoginForm