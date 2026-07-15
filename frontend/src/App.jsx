import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const colors = ["#53d860", "#d7d356", "#903939", "#e3a283"];
    const [bgColor, setBG] = useState("#903939");
    const [message, setMsg] = useState("");

    useEffect(() => {
        // color changing trick
        setBG(colors[Math.floor(Math.random() * 4)]);

        // to fetch data
        fetch("http://localhost:3000/api/data")
            .then((res) => res.json())
            .then((data) => setMsg(data.message))
            .catch((err) => {
                console.error("Error: ", err);
            });
    }, []);
    return (
        <div className="App" style={{ backgroundColor: bgColor }}>
            <h3>See what server is sending here</h3>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Hit me!
            </button>
            <p className="counts">{count}</p>
            <p>{message || "Loading..."}</p>
        </div>
    );
}

export default App;
