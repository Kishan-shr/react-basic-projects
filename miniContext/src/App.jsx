import Login from "./components/login"
import Profile from "./components/Profile"
import UserContextProvider from "./contexts/UserContextProvider"
function App() {


  return (
    <UserContextProvider>
    <h1 className="text-3xl font-bold ">
     Context Api
    </h1>
    <Login/>
    <Profile />
    </UserContextProvider>
  )
}

export default App
