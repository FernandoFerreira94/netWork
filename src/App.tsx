import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router";
import "./App.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={2000} />
        <AppRoute />
      </BrowserRouter>
    </>
  );
}
