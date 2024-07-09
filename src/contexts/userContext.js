import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";

const LogContext = createContext();

const LoginProvider = ({ children }) => {
    
    const [mithunList, setMithunList] = useState([
        { task: "Fetch Data", completed: false, deleted: false, favourite: false },
        { task: "Script Phase 1", completed: false, deleted: false, favourite: false }
    ]);

    const [rohanList, setRohanList] = useState([
        { task: "Record Voiceover", completed: false, deleted: false, favourite: false },
        { task: "Edit Video", completed: true, deleted: false, favourite: false }
    ]);

    const getCompleted = (user) => {
        const list = user === "MITHUN" ? mithunList : user === "ROHAN" ? rohanList : [];
        return list.filter(task => task.completed && !task.deleted).length;
    };

    const getTotal = (user) => {
        const list = user === "MITHUN" ? mithunList : user === "ROHAN" ? rohanList : [];
        return list.filter(task => !task.deleted).length;
    };

    const navigate = useNavigate();
    const [user, setUser] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    const login = (username, password) => {
        (password === "tripleX" || password === "123") ? routeToHome(username) : alert("Wrong Password");
    };

    const logout = () => {
        setUser("");
        navigate("/");
    };

    const routeToHome = (username) => {
        setUser(username);
        navigate("/home");
    };

    const getData = (user) => {
        return user === "MITHUN" ? mithunList : user === "ROHAN" ? rohanList : [];
    };

    const updateArray = (user, data) => {
        user === "MITHUN" ? setMithunList(data) : user === "ROHAN" ? setRohanList(data) : console.log("No updates");
    };

    return (
        <LogContext.Provider value={{ 
            user, 
            password, 
            login, 
            logout, 
            getCompleted, 
            getTotal, 
            getData, 
            updateArray, 
            showOnlyFavorites,
            setShowOnlyFavorites
        }}>
            {children}
        </LogContext.Provider>
    );
};

export { LogContext, LoginProvider };
