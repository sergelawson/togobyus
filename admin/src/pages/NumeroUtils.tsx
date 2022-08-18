import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import protectedRoute from "../components/protectedRoute";

const NumeroUtils = () => {
  return <Sidebar>NumeroUtils</Sidebar>;
};

export default protectedRoute(NumeroUtils);
