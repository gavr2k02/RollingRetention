import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState("");
    const [dateRegistration, setDateRegistration] = useState("");
    const [dateLastActivity, setDateLastActivity] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            id,
            dateRegistration,
            dateLastActivity,
        };

        axios
            .post("api/usersdata", user)
            .then((respone) => console.log(respone));
    };

    useEffect(() => {
        axios
            .get("api/usersdata")
            .then((response) => console.log(response.data));
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />
                <input
                    type='date'
                    value={dateRegistration}
                    onChange={(event) =>
                        setDateRegistration(event.target.value)
                    }
                />
                <input
                    type='date'
                    value={dateLastActivity}
                    onChange={(event) =>
                        setDateLastActivity(event.target.value)
                    }
                />
                <button type='submit'>Send</button>
            </form>
            {users}
        </div>
    );
}

export default App;
