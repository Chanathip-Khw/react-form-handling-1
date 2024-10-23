import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMsg, setGreetingMsg] = useState("Greeting Message");
  const [newGreetingMsg, setNewGreetingMsg] = useState("");

  const handleNewGreetingMessgae = (event) => {
    setNewGreetingMsg(event.target.value);
  };

  const handleGreetingMsg = () => {
    setGreetingMsg(newGreetingMsg);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={handleNewGreetingMessgae}
        />
      </div>

      <div className="buttons">
        <button onClick={handleGreetingMsg}>Update text</button>
      </div>
    </div>
  );
}

export default App;
