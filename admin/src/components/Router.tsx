import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "../pages/Event";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Promos from "../pages/Promos";
import NumeroUtils from "../pages/NumeroUtils";
import Organisateur from "../pages/Organisateur";
import UtilType from "../pages/UtilType";
import EventType from "../pages/EventType";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/events" element={<Event />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/utils" element={<NumeroUtils />} />
        <Route path="/org" element={<Organisateur />} />
        <Route path="/login" element={<Login />} />
        <Route path="/util-type" element={<UtilType />} />
        <Route path="/event-type" element={<EventType />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
