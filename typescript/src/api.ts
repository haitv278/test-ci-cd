import axios from "axios";
import { IUser } from "./models";

export const getUser = () => {
    return axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
}