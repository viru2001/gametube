import axios from "axios";

const fetchCategoryService = () => axios.get("/api/categories");

export { fetchCategoryService };
