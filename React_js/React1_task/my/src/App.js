import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <nav className="navbar">
        <h2>MyWebsite</h2>

        <button onClick={() => setPage("Home")}>
          Home
        </button>

        <button onClick={() => setPage("About Us")}>
          About Us
        </button>

        <button onClick={() => setPage("Services")}>
          Services
        </button>

        <button onClick={() => setPage("Contact Us")}>
          Contact Us
        </button>

        <button onClick={() => setPage("Login")}>
          Login
        </button>
      </nav>

      <div className="content">
        {page === "Home" && (
          <div>
            <h1>Hello Divya!</h1>
            <p>Welcome to our website.</p>
          </div>
        )}

        {page === "About Us" && (
          <div>
            <h1>About Us</h1>
            <p>This is our website.</p>
          </div>
        )}

        {page === "Services" && (
          <div>
            <h1>Our Services</h1>
            <p>We provide web development services.</p>
          </div>
        )}

        {page === "Contact Us" && (
          <div>
            <h1>Contact Us</h1>
            <p>Email: example@gmail.com</p>
          </div>
        )}

        {page === "Login" && (
          <div>
            <h1>Login</h1>
            <input placeholder="Enter your email" />
            <br />
            <br />
            <button onClick={() => alert("Login clicked!")}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
