import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Full Stack Development</h1>

      <h2>Development Types</h2>

      <ol>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Fullstack</li>
      </ol>

      <h2>Digital Clock</h2>

      <div className="clock">
        {time.toLocaleTimeString()}
      </div>

      <p>
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}

export default App;