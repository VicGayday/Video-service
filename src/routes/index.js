import Login from "../pages/login/Login";
import Films from "../pages/films/Films";

export const publicRoutes = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];

export const privateRoutes = [
  {
    path: "/",
    component: Films,
    exact: true,
  },
];
