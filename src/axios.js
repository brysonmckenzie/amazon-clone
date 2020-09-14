import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-a4462.cloudfunctions.net/api",
});

export default instance;

// "http://localhost:5001/clone-a4462/us-central1/api", // tHE API {cloud function } URL
