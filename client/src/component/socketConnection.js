import { io } from "socket.io-client";
const ENDPOINT = "ws://localhost:8080"
export default io(ENDPOINT)