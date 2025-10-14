import React, { useEffect, useMemo, useState} from "react";

const ChattingAppWebsockets = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState('');
    const [userNameValidated, setUserNameValidated] = useState(false)
    console.log(userName)
    let socket = useMemo(() => {
        if (userNameValidated)
            return new WebSocket(`ws://localhost:8080/?name=${encodeURIComponent(userName)}`);
    }, [userNameValidated]);
    useEffect(() => {
        if (socket?.readyState===1) {
            socket.onopen = () => {
                console.log("✅ Connected to WebSocket");
                console.log("ReadyState:", socket.readyState); // Should be 1 (OPEN)
            };
            socket.onmessage = (event) => {
                console.log("📩", event.data);
                setMessages((prev) => [...prev, event.data]);
            };
            socket.onerror = (err) => {
                console.log("❌ WebSocket Error:", err);
            };
            socket.onclose = () => console.log("❌ Disconnected from server");

            return () => {
                socket.close();
            };
        }

    }, [socket]); // Add socket as dependency

    const sendMessage = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            console.log("Sending:", input);
            // Add locally for immediate feedback (remove once echoes work)
            const myMsg = `You: ${input}`;
            setMessages((prev) => [...prev, myMsg]);
            socket.send(input);
            setInput("");
        } else {
            console.log("Socket not open, readyState:", socket?.readyState); // Debug helper
        }
    };

    return (
        <div style={{flex: 1, padding: 20,flexDirection:"column"}}>
            <div style={{fontSize: 18, fontWeight: "bold"}}>Chat Room</div>
            {messages.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            <h2>User Name</h2>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="UserName"
                style={{
                    padding: 12,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 1,
                    marginTop: 10,
                }}
            />
            <button onClick={() => setUserNameValidated(true)}>Accept UserName</button>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                style={{
                    padding: 12,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 1,
                    marginTop: 10,
                }}
            />
            <button onClick={sendMessage}>SEND</button>
        </div>
    );
};

export default ChattingAppWebsockets;