import React, { useState } from "react";
import { Link } from "react-router";
import eyeOpen from '../assets/eye-line.svg'
import eyeClosed from '../assets/eye-off-line.svg'

const Signup = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showEyeIcon, setShowEyeIcon] = useState(false);


  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
     
    if(password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    if(!(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password))) {
      setPasswordError('Password must contain at least one special character');
      return;
    }

    if(!(/[A-Z]/.test(password))) {
      setPasswordError('Password must contain at least one uppercase letter');
      return;
    }
    
    if(!(/[0-9]/.test(password))) {
      setPasswordError('Password must contain at least one digit');
      return;
    }


    setPasswordError('');

    setUser({
      name: name,
      roll: roll,
      email: email,
      password: password,
    });

    console.log(user.name);
    console.log(user.roll);
    console.log(email);
    console.log(password);

    setName("");
    setRoll("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-login-background-sm lg:bg-login-background bg-cover w-full h-screen flex justify-center items-center">
      <div className="bg-white/5 backdrop-blur-md border border-white/20 lg:w-[23%] md:w-[25%] w-[85%] p-4 lg:p-7 md:p-6 rounded-lg shadow-md text-white">
        <h1 className="text-center font-bold text-3xl mt-2 text-emerald-500">
          CollegeByte
        </h1>
        <p className="text-center text-lg mb-2">Create your Account</p>
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter your name"
            className="px-3 py-2 rounded w-full  bg-transparent border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <label htmlFor="roll">Roll No</label>
          <input
            type="number"
            id="roll"
            value={roll}
            onChange={(e) => {
              setRoll(e.target.value);
            }}
            placeholder="Enter roll no (eg. 002410503001)"
            className="px-3 py-2 rounded w-full  bg-transparent border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="px-3 py-2 rounded w-full  bg-transparent border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />

          <label htmlFor="password">Password</label>

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                e.target.value.length > 0 ? setShowEyeIcon(true) : (setShowEyeIcon(false), setShowPassword(false));
              }}
              placeholder="Enter your password"
              className="pr-9 pl-3 py-2 rounded w-full bg-transparent border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
            <img
              id="eye"
              src={showPassword ? eyeOpen : eyeClosed}
              className={`absolute w-5 h-5 top-3 right-2 cursor-pointer ${showEyeIcon ? "block" : "hidden"}`}
              onClick={togglePassword}
            />
          </div>
          {passwordError && <p className={`text-red-500 text-sm`}>{passwordError}</p>}
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500  font-bold rounded mt-4 mb-4 py-2 text-center"
          >
            Signup
          </button>
        </form>
        <p className="text-center">
          Already have an account ?{" "}
          <Link to="/login" className="font-bold hover:text-emerald-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
