import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from './components/Logout'
import Chat from './pages/Chat/Chat'
import './App.css'
function App() {
  const user = localStorage.getItem('token')
 
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/main" exact element={<Main />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/messages" element={<Chat />} />
    </Routes>
  )
}

export default App
