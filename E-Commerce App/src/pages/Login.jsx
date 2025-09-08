import { useState } from "react";
import LoginInput from "../components/Login/LoginInput";

const Login = () => {
  const [authState, setAuthState] = useState("Sign Up");
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="m-auto mt-14 flex w-[90%] flex-col items-center gap-4 text-gray-800 sm:max-w-96"
    >
      <div className="mt-10 mb-2 inline-flex items-center gap-2">
        <p className="font-prata text-3xl">{authState}</p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {authState === "Sign Up" && (
        <LoginInput type={"text"} placeholder={"Name"} required />
      )}
      <LoginInput type={"email"} placeholder={"Email"} required />
      <LoginInput type={"password"} placeholder={"Password"} required />
      <div className="mt-[-8px] flex w-full justify-between text-sm">
        <p className="cursor-pointer">Forgot your password</p>
        <p
          onClick={() =>
            setAuthState(authState === "Sign Up" ? "Login" : "Sign Up")
          }
          className="cursor-pointer"
        >
          {authState === "Sign Up" ? "Create Account" : "Login Here"}
        </p>
      </div>
      <button className="mt-4 cursor-pointer bg-black px-8 py-2 font-light text-white">
        {authState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
