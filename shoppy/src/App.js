import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Outlet />
      </UserContextProvider>
    </>
  );
}

export default App;
