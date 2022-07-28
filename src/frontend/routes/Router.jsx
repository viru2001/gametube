import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, SingleVideo } from "../pages/";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/video/:videoId" element={<SingleVideo />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/history" element={<Home />} />
        <Route path="/liked_videos" element={<Home />} />
        <Route path="/watch_later" element={<Home />} />
      </Route>
    </Routes>
  );
};
export { Router };
