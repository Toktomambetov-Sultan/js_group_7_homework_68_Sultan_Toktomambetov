import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://lesson62-835bc.firebaseio.com",
});

export default axiosApi;
