import { deleteUserData, setUserData } from "../utils.js";
import { post, get } from "./api.js";

const routes = {
    register: "/users/register",
    login: "/users/login",
    logout: "/users/logout"
};

export async function register(email, password, username) {
    const result = await post(routes.register, {email, password, username});
    setUserData(result);
};

export async function login(email, password) {
    const result = await post(routes.login, {email, password});
    setUserData(result);
};

export async function logout() {
    get(routes.logout);
    deleteUserData();
};

