import { useState, useEffect } from "react";
import "./App.css";
const API = "https://localhost:";
function App() {
    const [message, setMsg] = useState("");

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setMsg(data.message))
            .catch((err) => console.error("Error fetching from API:", err));
    }, []);
    return (
        <div className="App">
            <h3>See what server is sending here</h3>
            <p>{message || "Loading..."}</p>
        </div>
    );
}

export default App;
