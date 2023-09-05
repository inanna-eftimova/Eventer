import { Link } from "react-router-dom";

function Register(){
    return(
        <section id="register">
        <div className="form">
          <h2>Register</h2>
          <form className="register-form">
            <input
              type="text"
              name="email"
              id="register-email"
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="password"
            />
            <input
              type="password"
              name="re-password"
              id="repeat-password"
              placeholder="repeat password"
            />
            <button type="submit">register</button>
            <p className="message">Already registered? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </section> 
    );
}

export default Register;