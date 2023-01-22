import { Home, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "ABOUT",
    path: "/home",
    href: "#About",
    element: <Home />,
  },
  {
    name: "CEO TALK",
    href: "#Ceo Talk",
    element: <Home />,
  },
  {
    name: "REVIEWS",
    href: "#reviews",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "COACHING TIPS",
    href: "#coaching-tips",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
