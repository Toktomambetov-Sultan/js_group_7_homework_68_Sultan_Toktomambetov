import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://js7-lesson-68.firebaseio.com/",
});

export default axiosApi;
