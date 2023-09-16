import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ChakraTabs from "./Tabs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/tabs" Component={ChakraTabs} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
