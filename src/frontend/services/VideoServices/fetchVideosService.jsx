import axios from "axios";

const fetchVideosService = () => axios.get("/api/videos");

export { fetchVideosService };
