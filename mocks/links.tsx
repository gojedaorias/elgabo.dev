import { Bag, Email, Home, Profile, Store, Writing } from "@/components/Icons";

const links = [
  {
    title: "Inicio",
    url: "/",
    icon: <Home />,
  },
  {
    title: "Proyectos",
    url: "/projects",
    icon: <Bag />,
  },
  {
    title: "Tienda",
    url: "/store",
    icon: <Store />,
  },
  {
    title: "Sobre mi",
    url: "/about",
    icon: <Profile />,
  },
  {
    title: "Blog",
    url: "/writings",
    icon: <Writing />,
  },
  {
    title: "Contacto",
    url: "/contact",
    icon: <Email />,
  },
];

export { links };
