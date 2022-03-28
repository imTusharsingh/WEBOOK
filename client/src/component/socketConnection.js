import { io } from "socket.io-client";
const ENDPOINT = "https://mern-socialapp123.herokuapp.com/"
export default io(ENDPOINT)