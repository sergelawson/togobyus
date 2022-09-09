import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import protectedRoute from "../components/protectedRoute";

const Promos = () => {
  return <Sidebar>Promo en Developpement</Sidebar>;
};

export default protectedRoute(Promos);
