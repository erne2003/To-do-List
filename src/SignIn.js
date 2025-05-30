import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import "./SignIn.css"; // Assuming you have a CSS file for styling


const auth = getAuth(app);


function SignIn({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsvisible] = useState(true);
  // Handle account creation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        setError("");
        onSignIn(true); // Update parent state to show main content
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("Firebase: Error (auth/invalid-credential).")) {
          setError('Error: Invalid email or password.');
        } else {
          setError(`Error: ${errorMessage}`);
        }
      });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        onSignIn(true); // This should update the state in App.js
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("Firebase: Error (auth/invalid-credential).")) {
          setError('Error: Invalid email or password.');
        }else {
        setError(`Error: ${errorMessage}`);
        }
      });
  };

  return (
    <div>
      {/* SignIn form */}
      {isVisible ? (
        <div className="SignIn" style={{ display: "block" }}>
          <form
            className="sign-in-form"
            onSubmit={handleLogin}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "100px",
              width: "fit-content",
              margin: "auto",
              top: "150px",
              position: "relative",
              fontSize: "30px",
            }}
          >
            <label style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
              <p style={{justifyContent:"center", position:"relative", left:"20px", marginBottom:"2px"}}>Enter your email:</p>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: "10px", marginTop: "5px", height: "30px" }}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <p style={{justifyContent:"center", position:"relative", left:"2px", marginBottom:"2px"}}>Enter your password:</p>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: "10px", marginTop: "5px", height: "30px" }}
              />
            </label>

            <button className="SignIn-Submit" type="submit">
              LOGIN!
            </button>
           <div className="error-message" style={{ color: "red", fontSize:'15px', position:'relative', top:'150px', left:'200px'}}>{error}</div>
          </form>

          <button className="CreateAccount" onClick={() => setIsvisible(false)}>
            Create Account!
          </button>
        </div>
) : (
  <div>
    <div className="CreateAccountScreen" style={{ display: "flex", flexDirection: "column" }}>
      <form
        className="create-account-form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "70px",
          marginLeft: "530px",
          fontSize: "25px",
        }}
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          Name:
          <input
            type="text"
            id="name"
            style={{ minWidth: "50px", width: "fit-content", height: "30px" }}
            placeholder="Enter your name"
            required
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ minWidth: "50px", width: "fit-content", height: "30px" }}
            placeholder="Enter your email"
            required
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ minWidth: "50px", width: "fit-content", height: "30px" }}
            placeholder="Enter your password"
            required
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Confirm Password:
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ minWidth: "50px", width: "fit-content", height: "30px" }}
            placeholder="Confirm your password"
            required
          />
        </label>
        <button className="CreateAccount-Submit" type="submit" style={{}}>
          Submit
        </button>
      </form>

      <button
        className="CreateAccount"
        style={{
          background: "none",
          border: "none",
          position: "relative",
          left: "-20px",
          top: "140px",
        }}
        onClick={() => setIsvisible(true)}
      >
        Have an account? Login
      </button>
    </div>
    <div className="error-message" style={{ color: "red", fontSize:'15px', position:'relative', top:'180px', left:'530px'}}>{error}</div>
  </div>
)}
      

      {/* Create Account form */}
      

    </div>
  );
}

export default SignIn;
