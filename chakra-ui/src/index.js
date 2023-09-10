import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/Router";
import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Layout>
      <Router />
    </Layout>
  </ChakraProvider>
);
