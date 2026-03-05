import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const { signUp, login } = useContext(AuthContext);

  const [mode, setMode] = useState("signUp");
  const [authError, setAuthError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    setAuthError(null);

    let result;

    if (mode === "signUp") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setAuthError(result.error);
    }
  }

  return (
    <div className="flex flex-col gap-4 w-2/3 md:w-1/2 max-w-sm mx-auto m-10 p-6 bg-[var(--color-background)] rounded-xl shadow-[var(--color-shadow)]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col text-xs sm:text-md md:text-lg font-bold text-[var(--color-primary)] font-semibold">
          Email
          <input
            className="my-2 p-3 text-xs sm:text-md md:text-lg font-bold rounded-lg border border-gray-300 dark:border-gray-600 outline-none transition-all"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
            })}
          />
        </label>
        {errors.email && (
          <p className="text-red-500 text-xs sm:text-md md:text-lg font-bold mt-1">
            {errors.email.message}
          </p>
        )}

        <label className="flex flex-col text-xs sm:text-md md:text-lg font-bold text-[var(--color-primary)] font-semibold">
          Password
          <input
            className="my-2 p-3 text-xs sm:text-md md:text-lg font-bold rounded-lg border border-gray-300 dark:border-gray-600 outline-none transition-all"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
              maxLength: {
                value: 12,
                message: "Password must be at most 12 characters",
              },
            })}
          />
        </label>
        {errors.password && (
          <p className="text-red-500 text-xs sm:text-md md:text-lg font-bold mt-1">
            {errors.password.message}
          </p>
        )}

        {authError && (
          <p className="text-red-500 text-xs sm:text-md md:text-lg font-bold mt-1">
            {authError}
          </p>
        )}
        <div className="flex justify-end pt-2">
          <button
            className="w-1/3 bg-[var(--color-mimo)] hover:bg-[var(--color-pipo)] text-xs sm:text-md md:text-lg font-bold text-[var(--color-primary)] font-bold py-3 rounded-lg transition-all"
            type="submit"
          >
            {mode === "signUp" ? "Sign Up" : "Login"}
          </button>
        </div>
      </form>

      <div className="px-2 text-xs sm:text-md md:text-lg font-bold">
        {mode === "signUp" ? (
          <p className="text-[var(--color-primary)]">
            Already have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => setMode("login")}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-[var(--color-primary)]">
            Don't have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => setMode("signUp")}
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
