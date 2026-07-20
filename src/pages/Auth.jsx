import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
  const [mode, setMode] = useState("signup");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleMode = () => {
    setMode(mode === "signup" ? "login" : "signup");
  };

  function submitted() {
    alert("Submitted!");
  }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <form
            action=""
            className="auth-form"
            onSubmit={handleSubmit(submitted)}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                {...register("email", { required: "Email is required" })}
              />

              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password Must be Greater than 6",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password Must be Less than 20",
                  },
                })}
              />

              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            <p>
              {mode === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <span
                className="auth-link"
                onClick={toggleMode}
                style={{ cursor: "pointer" }}
              >
                {mode === "signup" ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
