import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";
import Chat from "./pages/Chat/Chat";
import Fitness from "./pages/Fitness/Fitness";
import ClientProfile from "./pages/Client/ClientProfile";
import Planner from "./pages/Planner/Planner";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/clients" element={<ClientProfile />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </main>
  );
}

export default App;
