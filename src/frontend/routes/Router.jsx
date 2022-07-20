import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, SingleVideo } from "../pages/";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/video/:videoId" element={<SingleVideo />} />
    </Routes>
  );
};
export { Router };
