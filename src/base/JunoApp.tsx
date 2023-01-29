import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useJunoToken } from "../auth/hooks";
import Home from "../components/Home";
import AppLogin from "../forms/login";
// import './App.css';

function JunoApp() {
  const { token, setToken } = useJunoToken();
  if (!token) {
    return <AppLogin setToken={setToken} />;
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setToken={setToken} />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default JunoApp;
