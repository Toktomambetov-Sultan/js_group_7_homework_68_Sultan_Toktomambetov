import axios from "axios";

const instance = axios.create({
  baseURL: "https://lesson62-835bc.firebaseio.com"
});

export default instance;